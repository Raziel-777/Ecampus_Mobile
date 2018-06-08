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
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '10%',
            borderBottomColor : 'teal',
            borderBottomWidth : 3,
            alignItems: 'center'
        }}>
            <View style={{
                paddingHorizontal: 10
            }}>
                <Image style={{
                    width: 150,
                    height: 50,
                    resizeMode: Image.resizeMode.contain
                }}
                       source={require('./src/assets/img/logo.png')}/>

            </View>
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
            // !!!!
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