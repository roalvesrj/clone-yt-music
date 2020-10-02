import React from 'react';
import { View, Image, Text } from 'react-native';

import Styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    return (
        <>
            <View style={Styles.container}>
                <Image
                    style={Styles.image}
                    source={require('./../../../assets/images/yt-music-logo.png')}
                />
                <View style={Styles.subcontainer}>
                    <Icon name="search" style={Styles.icon} />
                    <Icon name="user-circle" style={Styles.icon} />
                </View>
            </View>
        </>
    )
}

export default Footer;
