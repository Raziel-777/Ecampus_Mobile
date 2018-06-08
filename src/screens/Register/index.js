import  React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Logo from '../../components/Logo'



export default class Register extends Component {
    static navigationOptions = {
        headerTitle : <Text style={{fontSize:12}}>Nouvelle inscription ...</Text>,
    };

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Logo/>
                </View>

                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}/>
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}/>
                <TextInput
                    placeholder="Email adress"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    style={styles.input}/>
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    secureTextEntry
                    style={styles.input}/>
                <TextInput
                    placeholder="Confirm Your Password"
                    placeholderTextColor="rgba(0,0,0,0.7)"
                    secureTextEntry
                    style={styles.input}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        S'inscrire au Ecampus
                    </Text>

                </TouchableOpacity>

            </View>
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