import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';

import users from '../components/data/Users'
import { FlatList } from 'react-native-gesture-handler';
import ContactListItem from '../components/ContactListItem/contactlistitem_index';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        style={{width: '100%'}}
        data={users} 
        renderItem={ ({ item } ) => <ContactListItem user={item} /> } 
        keyExtractor = {(item) => item.id}
      />
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
