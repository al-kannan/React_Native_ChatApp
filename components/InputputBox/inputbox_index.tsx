import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons'
import { MaterialTopTabView } from '@react-navigation/material-top-tabs';
import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,} from 'react-native'
import styles from './styles'

const InputBox = () => {
    const [message, setMessage] = useState('');
    const onMicrophone = () => {
        console.log('OnMicrophone')
    }
    const onSendPress = () => {
        console.log(`Sending ${message}`);
        setMessage('');
    }

    const onPress = () => {
        (!message) ? onMicrophone() : onSendPress();
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name = "laugh-beam" size="24" color='grey' />
                <TextInput style={styles.textInput}
                multiline
                numberOfLines={5}
                value = {message}
                onChangeText = {setMessage}
                placeholder = {"Type a message"}
                fontSize={20}
                />
                <Entypo name = "attachment" size="24" color='grey' style={styles.icon} />
                {!message && <Fontisto name = "camera" size="24" color='grey' />}
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message 
                    ? <MaterialCommunityIcons name = "microphone" size="28" color='white' />
                    : <MaterialIcons name = "send" size="28" color='white' />
                }
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;