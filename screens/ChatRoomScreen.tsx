import React from 'react';
import { FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native'
import chatRoomData from '../components/data/Chats'
import ChatMessage from '../components/ChatMessage/chatmessage_index'
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputputBox/inputbox_index';

const ChatRoomScreen = () => {
    const route = useRoute();
    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({item})=> <ChatMessage message={item} /> }
                inverted
            />
        <InputBox />
        </ImageBackground>
    );
}


export default ChatRoomScreen; 