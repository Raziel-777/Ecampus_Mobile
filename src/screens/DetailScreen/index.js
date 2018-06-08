import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView

} from "react-native";

import style from './style';
import HTMLView from 'react-native-htmlview';
import moment from 'moment'


export default class DetailScreen extends Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        headerTitle: <Text>Détails du tutoriel</Text>
    };

    render() {

        let item = this.props.navigation.state.params.item;

        return (
            <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
                <View style={{ width:'85%' }}>
                    <Text style={style.title}>{item.title}</Text>
                </View>
                <View style={{ marginTop:20, borderBottomWidth:2, borderBottomColor:'teal', paddingBottom:10 }}>
                    <Text>{item.user.name} . {moment(item.created_at).format('DD/MM/YY')}</Text>
                </View>

                <ScrollView>
                    <View style={{
                        paddingVertical: 10,
                        borderBottomWidth: 2,
                        borderBottomColor: 'teal'
                    }}>
                    <Image
                        source={{
                            uri: 'https://test.ecampus.click/storage/imgpublication-resize/' +
                            item.imgpublication
                        }}
                        style={{
                            width: '100%',
                            borderRadius: 4,
                            height:100,
                            resizeMode: Image.resizeMode.contain,

                        }}/>
                </View>

                    <HTMLView
                        value={item.content}
                    />

                </ScrollView>

                <View style={{ width:'100%', backgroundColor:'#2f3640' }}>
                    <Text style={{color:'#fff', alignSelf:'center', padding:10 }}>Last Comments ..</Text>
                </View>
            </View>
        )
    }

}