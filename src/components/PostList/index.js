import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import Loader from '../../../src/components/Loader'
import TokenStorage from "../../services/TokenStorage";
import moment from "moment";

export default class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    async componentDidMount() {
        try {
            let response = await fetch('https://test.ecampus.click/api/publications', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + TokenStorage.token
                },
            });
            let responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            })
        }
        catch (e) {
            console.log(e)
        }
    }


    render() {

        if (this.state.isLoading) {
            return (
                <Loader/>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{alignItems: 'center', marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>
                            Tous les Tutoriels
                        </Text>
                    </View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) =>
                            <View style={{padding: 10}}>
                                <View>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#353b48',
                                        borderColor: 'teal',
                                        borderRadius: 3,
                                        padding: 5
                                    }}
                                                      onPress={() => {
                                                          this.props.navigation.navigate('Detail', {item});
                                                      }}>
                                        <View style={{flexDirection: 'column'}}>
                                            <View style={{
                                                flexDirection: 'row',
                                                borderBottomColor: 'white',
                                                borderBottomWidth: 1,
                                                borderRadius: 2,
                                            }}>
                                                <View style={{
                                                    width: '40%'
                                                }}>
                                                    <Image
                                                        source={{uri: 'https://test.ecampus.click/storage/imgpublication-resize/'+item.imgpublication}}
                                                        style={{
                                                            width: '100%',
                                                            height: 100,
                                                            resizeMode: Image.resizeMode.contain
                                                        }}/>

                                                </View>
                                                <View style={{
                                                    flexDirection: 'column',
                                                    paddingHorizontal: 10,
                                                    width: '60%'
                                                }}>

                                                    <View>
                                                        <Text style={{
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                            fontSize: 15
                                                        }}>
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                    <View style={{
                                                        maxHeight: 10,
                                                    }}>
                                                        <Text style={{
                                                            color: 'white',
                                                            fontSize: 15
                                                        }}>
                                                            {item.description}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                padding: 10
                                            }}>
                                                <View>
                                                    <Text style={{color: 'white'}}>
                                                        Par {item.user.firstname}, le  {moment(item.created_at).format('DD/MM/YY')}
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text style={{color: 'white'}}>
                                                        >
                                                    </Text>
                                                </View>
                                            </View>


                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        }/>
                    <View style={{
                        position: 'absolute',
                        right: 15,
                        bottom: 15,
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddPost')}
                        >
                            <Image
                                style={{ width:60, height:60}}
                                source={require('../../assets/img/plus.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        borderRadius: 3,
        backgroundColor: 'lightgrey',
        padding: 10
    }

});


