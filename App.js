import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import DetailScreen from './src/screens/DetailScreen';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import {
    createDrawerNavigator,
    createStackNavigator,
} from 'react-navigation';

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        List: {
            screen: ListScreen
        },
        DetailScreen: {
            screen: DetailScreen
        },
        Login: {
            screen: LoginScreen
        },
    }
    ,
    {
        initialRouteName: 'Login',
        mode: 'card',
    });
