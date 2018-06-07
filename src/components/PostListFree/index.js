import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Loader from '../../../src/components/Loader'

export default class PostListFree extends Component {

    static navigationOptions = {
        header:
            <View style={{
                borderBottomWidth: 2,
                borderBottomColor: 'teal'
            }}>
                <Image style={{resizeMode: Image.resizeMode.contain, width: 20, height:100}} source={require('../../../src/assets/img/logo.png')}/>
            </View>,
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    async componentDidMount() {
        try {
            let response = await fetch('https://test.ecampus.click/api/publications/freePubli');
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
                    <View style={{padding: 20}}>
                        <Text>
                            Derniers Tutoriels Gratuits:
                        </Text>
                    </View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) =>
                            <View style={{padding: 10}}>
                                <View>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'teal',
                                        borderRadius: 3,
                                        padding: 5
                                    }}
                                                      onPress={() => {
                                                          this.props.navigation.navigate('DetailScreen', {dataSource: item});
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
                                                            fontSize: 20
                                                        }}>
                                                            {item.title}
                                                            </Text>
                                                    </View>
                                                    <View style={{
                                                        maxHeight: 10,
                                                    }}>
                                                        <Text style={{
                                                            color: 'white',
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
                                                        Par {item.user.firstname}, le {item.created_at}
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
                        padding: 10,
                        marginBottom: 10,
                        alignItems: 'flex-end'
                    }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('List')}
                        >
                            <Text>
                                Voir Tous les Tutoriels
                            </Text>
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


