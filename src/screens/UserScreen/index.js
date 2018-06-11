import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from "react-native";
import style from './style';
import moment from "moment/moment";
import TokenStorage from "../../services/TokenStorage";

export default class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };

        console.log(this.props.navigation.state.params.item.user);
    }

    async componentDidMount() {
        try {
            let response = await fetch('https://test.ecampus.click/api/users/' + this.props.navigation.state.params.item.user.id, {
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
                user: responseJson,
            });
            console.log('user' + this.state.user);
        }
        catch (e) {
            console.log(e)
        }
    }

    render() {
        if (this.state.isLoading) {
            return (

                <View>
                    <Text>
                        Chargement en cours....
                    </Text>
                </View>
            )
        } else {

            let user = this.state.user;
            console.log(user);
            return (

                <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
                    <View style={{width: '85%'}}>
                        <Text style={style.title}>
                            {user.name}
                        </Text>
                        <Text style={style.title}>
                            {user.firstname.toUpperCase()}
                        </Text>
                    </View>
                    <View
                        style={{marginTop: 20, borderBottomWidth: 2, borderBottomColor: 'teal', paddingBottom: 10}}>
                        <Text>Membre depuis le {moment(user.created_at).format('DD/MM/YY')}
                        </Text>
                    </View>
                    <View style={{
                        paddingVertical: 20,

                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>

                        <View style={{width: '50%'}}>

                            <View>
                                <Text>
                                    {user.tutorial.length ? user.tutorial.length : '0'} Tutoriels
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    {user.post.length ? user.post.length : '0'} Posts
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    {user.followers.length ? user.followers.length : '0'} Followers
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    {user.followings.length ? user.followings.length : '0'} Follows
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    {user.comment.length ? user.comment.length : '0'} Commentaires
                                </Text>
                            </View>

                        </View>
                        <View style={{width: '50%'}}>

                            <Image
                                source={{
                                    uri: 'https://test.ecampus.click/' +
                                    user.imgprofil
                                }}
                                style={{
                                    width: '100%',
                                    alignSelf: 'flex-end',
                                    borderRadius: 50,
                                    height: 100,
                                    resizeMode: Image.resizeMode.contain,
                                }}/>
                        </View>

                    </View>
                    <View style={{
                        backgroundColor: '#353b48',
                        borderRadius: 2,
                        padding: 20,
                    }}>

                        <ScrollView>

                            <Text style={{color: '#fff'}}>
                                {user.description}

                            </Text>

                        </ScrollView>

                    </View>
                </View>

            )
        }
    }


}