import React, {Component} from 'react';
import {
    View,
    Image
} from 'react-native';


export default class Logo extends Component{


    render(){
        return(
            <View style={{
                alignItems: 'center',
                margin : 20,

            }}>
                <Image source={require('../../../src/assets/img/logo.png')}
                       style={{
                           width:200,
                           height:30,
                           resizeMode:Image.resizeMode.contain,
                       }}/>
            </View>
        )
    }

}