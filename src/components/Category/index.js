import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import style from '../assets/style/style'


export class Tous extends Component {
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity>
                    <Image source={{uri: 'https://www.ecampus.click/storage/imgpublication-resize/PHP.jpg'}}
                           style={{width: 200, height: 200}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export class PHP extends Component {
    render() {
        return (
            <View style={style.container}>

                <TouchableOpacity>
                    <Image source={{uri: 'https://www.ecampus.click/storage/imgpublication-resize/PHP.jpg'}}
                           style={{width: 200, height: 200}}/>
                </TouchableOpacity>
            </View>

        )
    }
}

export class HTML extends Component {
    render() {
        return (
            <View style={style.container}>

                <TouchableOpacity>
                    <Image source={{uri: 'https://www.ecampus.click/storage/imgpublication-resize/HTML.jpg'}}
                           style={{width: 200, height: 200}}/>
                </TouchableOpacity>
            </View>

        )
    }
}

export class CSS extends Component {
    render() {
        return (
            <View style={style.container}>

                <TouchableOpacity>
                    <Image source={{uri: 'https://www.ecampus.click/storage/imgpublication-resize/CSS.jpg'}}
                           style={{width: 200, height: 200}}/>
                </TouchableOpacity>
            </View>

        )
    }
}

export class WebMobile extends Component {
    render() {
        return (
            <View style={style.container}>

                <TouchableOpacity>
                    <Image source={{uri: 'https://www.ecampus.click/storage/imgpublication-resize/WEBMOBILE.jpg'}}
                           style={{width: 200, height: 200}}/>
                </TouchableOpacity>
            </View>

        )
    }
}