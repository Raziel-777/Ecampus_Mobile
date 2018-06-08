import React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Logo from "../../components/Logo";
import TokenStorage from '../../services/TokenStorage';


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    async onLoginPress() {
        let access = '';
        try {
            let response = await fetch('https://test.ecampus.click/oauth/token/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'grant_type': 'password',
                    'client_id': 2,
                    'client_secret': 'uWUR61rcOCzK8g6TM9ZAT3P7doIHLLM9Yk0okcYt',
                    'username': this.state.email,
                    'password': this.state.password,
                    'scope': ''
                }),
            });

            let token = await response.json();
            access = await token.access_token.toString();

        } catch (e) {
            console.log(e);
        }
        TokenStorage.token = access;
        console.log(TokenStorage.token);
        this.props.navigation.navigate('Home');
    }


    onRegisterPress() {
        this.props.navigation.navigate('Register');
    }

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <Logo/>
                </View>

                <TextInput
                    placeholder="Email adresse"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}
                    onChangeText={(email => this.setState({email}))}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}/>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={this.onLoginPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onRegisterPress.bind(this)}
                                  style={styles.linkInscription}>
                    <Text style={{color: '#2980b9', textDecorationLine: 'underline'}}>
                        S'inscrire au ECampus
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    input: {
        height: 50,
        marginBottom: 10,
        color: '#000000',
        paddingHorizontal: 10,

    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 18,
        borderRadius: 4
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    linkInscription: {
        marginTop: 40,
        alignSelf: 'center',

    },
});
