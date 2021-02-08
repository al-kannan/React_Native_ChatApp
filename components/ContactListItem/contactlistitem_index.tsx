import React from 'react';
import {View, Text, Image} from 'react-native';
import {Users} from '../../types'
import styles from './styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';

export type ContactListItemProps = {
    user: Users
}

const ContactListItem = (props: ContactListItemProps) => {
    const {user} = props;
    const navigation = useNavigation();
    const onClick = () => {

    }
    return (
    <TouchableWithoutFeedback >
        <View style={styles.container}>
            <View style={styles.leftcontainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar} />
                <View style={styles.midcontainer}>
                    <Text style={styles.username}> {user.name} </Text>
                    <Text> {user.status} </Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
};

export default ContactListItem;