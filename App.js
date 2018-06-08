import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import DetailScreen from './src/screens/DetailScreen';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {
    createDrawerNavigator,
    createStackNavigator,
} from 'react-navigation';
import {View, Image} from "react-native";
import Hamburger from './src/components/Hamburger';
import Logo from './src/components/Logo'

const navigationOptionsEmptyHeader = {
    header: null,
};

const navigationOptionsHeader = {
    header:
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderBottomColor: 'teal'
        }}>
            <Image style={{width: '15%',
                resizeMode:Image.resizeMode.contain}} source={require('./src/assets/img/logo.png')}/>
            <Hamburger/>

        </View>

};

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: navigationOptionsHeader
        },
        List: {
            screen: ListScreen,
            navigationOptions: navigationOptionsHeader
        },
        DetailScreen: {
            screen: DetailScreen,
            navigationOptions: navigationOptionsHeader
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: navigationOptionsEmptyHeader
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: navigationOptionsEmptyHeader
        }

    },
    {
        initialRouteName: 'Login',
        mode: 'card',
    });