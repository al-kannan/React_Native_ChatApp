//This is the starting point
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
//import Navigation from './navigation/navigation_index';
import Navigation from './navigation/navigation_index';

import Amplify, {Auth, API, graphqlOperation} from "aws-amplify";
import awsExports from "./src/aws-exports";
//import { withAuthenticator } from '@aws-amplify/ui-react'
import { withAuthenticator } from 'aws-amplify-react-native'
import { getUser } from './src/graphql/queries';
import {createUser} from './src/graphql/mutations'
Amplify.configure(awsExports);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(()=> {
    const fetchUser = async() => {
      // Get Authenticated User from Auth Service
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true} );
      if (userInfo) {
        // Get user from backend
        const userData = await API.graphql(
          graphqlOperation(getUser, {id: userInfo.attributes.sub})
        )
        if (!userData.data.getUser) {
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: 'https://i.pravatar.cc/150?img='.concat(
                Math.floor(Math.random() * 10).toString()),
            status: 'Hey I am using ChatApp',
          }
          await API.graphql(
            graphqlOperation(
              createUser,
              {input: newUser}
            )
          )
        }
      }
    }
    fetchUser();
    console.log('This is to test')

  }, []
  )


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
