import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';


export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 3000);
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <View>
                    <Image style={{
                        width: 240,
                        height: 240,
                        resizeMode: Image.resizeMode.contain,
                        alignItems: 'center'
                    }}
                           source={require('../../../src/assets/img/logo.png')}
                    />
                </View>
                <View>
                    <ActivityIndicator size='large'/>
                </View>
            </View>
        );
    }
}