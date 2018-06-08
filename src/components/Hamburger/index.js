import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';


export default class Logo extends Component{

    render(){
        return(
            <View style={{
                alignItems:'flex-end',
                justifyContent:'flex-end',
                margin:25

            }}>
                <TouchableOpacity>

                    <Image source={require('../../assets/img/menu.png')}
                           style={{
                               width:40,
                               height:40,
                               resizeMode:Image.resizeMode.contain,
                           }}/>
                </TouchableOpacity>
            </View>
        )
    }

}