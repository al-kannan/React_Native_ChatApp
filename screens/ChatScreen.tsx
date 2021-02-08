import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItems/chatlistitems_index'

import chatRooms from '../components/data/ChatRooms'
import { FlatList } from 'react-native-gesture-handler';
import NewMessageButton from '../components/NewMessageButton/newmessagebutton_index';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={chatRooms} 
        renderItem={ ({ item } ) => <ChatListItem chatRoom={item} /> } 
        keyExtractor = {(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
