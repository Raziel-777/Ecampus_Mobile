import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Logo from "../Logo";

export default class LoaderScreen extends React.Component {

    render() {
        return (
                <View style={styles.container}>
                    <Logo/>
                    <ActivityIndicator size="large" color="#40739e"/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        alignItems: 'center',
        justifyContent: 'center',
    },

});