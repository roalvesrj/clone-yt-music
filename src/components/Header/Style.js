import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#212121'
    },
    subcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    texto: {
        color: '#999',
        fontSize: 12
    },
    image: {
        width: 85,
        height: 25
    },
    icon: {
        paddingLeft: 30,
        color: '#fff',
        fontSize: 26
    }
});

export default styles;