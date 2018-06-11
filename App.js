import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import Geoloc from './src/components/Geoloc';
import DetailScreen from './src/screens/DetailScreen';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AddPostScreen from './src/screens/AddPostScreen'
import {
    createDrawerNavigator,
    createStackNavigator,
} from 'react-navigation';
import {View, Image} from "react-native";
import Hamburger from './src/components/Hamburger';

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
        Detail: {
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
        },
        Geoloc: {
            screen: Geoloc,
            navigationOptions: navigationOptionsEmptyHeader
        },
        AddPost: {
            screen: AddPostScreen,
            navigationOptions: navigationOptionsEmptyHeader
        }

    },
    {
        initialRouteName: 'Login',
        mode: 'card',
    });