import React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';
import Logo from "../../components/Logo";



export default class LoginScreen extends Component {
    constructor(props){
        super(props)
    }
    onLoginPress(){
        this.props.navigation.navigate('Home');
    }
    onRegisterPress(){
        this.props.navigation.navigate('Register');
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.img}>
                    <Logo/>
                </View>

                <TextInput
                    placeholder="Email adress"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}/>
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    secureTextEntry
                    style={styles.input}/>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={this.onLoginPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onRegisterPress.bind(this)}
                                  style={styles.linkInscription}>
                    <Text style={{ color:'#2980b9', textDecorationLine: 'underline'}}>
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

    img: {
        alignItems: 'center',
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
