import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between',
        padding: 10
    },
    leftcontainer: {
        flexDirection: 'row',
    },
    midcontainer: {
        justifyContent: 'space-around',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight:15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 15,
    },
})

export default styles; 