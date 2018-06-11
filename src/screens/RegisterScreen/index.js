import  React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Logo from '../../components/Logo'
import TokenStorage from '../../services/TokenStorage'


export default class Register extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            firstname:'',
            name:'',
            email:'',
            password:''
        }
    }

    static navigationOptions = {
        headerTitle : <Text style={{fontSize:12, paddingLeft:10}}>Nouvelle inscription ...</Text>,
    };

    async onSubmit() {
        try {
            let response = await fetch('https://test.ecampus.click/api/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'name': this.state.name,
                    'firstname': this.state.firstname,
                    'email': this.state.email,
                    'password': this.state.password,
                    'password_confirmation': this.state.conf_password,
                }),
            });
            console.log(response);

            /**/
            let access= '';
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
            this.props.navigation.navigate('Home');

            /**/
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View >
                    <Logo/>
                </View>

                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}
                    onChangeText={(firstname) => this.setState({firstname})}
                    value={this.state.firstname}
                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <TextInput
                    placeholder="Email adress"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TextInput
                    placeholder="Confirm Your Password"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(conf_password) => this.setState({conf_password})}
                    value={this.state.conf_password}
                />
                <TouchableOpacity
                    onPress={() => this.onSubmit()} style={styles.buttonContainer}
                >
                    <Text style={styles.buttonText}>
                        S'inscrire au Ecampus
                    </Text>

                </TouchableOpacity>

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 20,
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
        borderRadius:4
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    linkInscription:{
        marginTop:40,
        alignSelf:'center',

    },
});