import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


export default StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 22,
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between'
    },
    button :{
        borderRadius: 3,
        backgroundColor: 'lightgrey',
        padding: 10
    },
    card : {
        flexDirection: 'row',
        borderRadius: 3,
        padding: 10,
        backgroundColor: 'teal'
    },
    image : {
        width: '100%',
        height: 100,
        resizeMode: Image.resizeMode.contain
    }
})