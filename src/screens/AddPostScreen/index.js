import  React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Picker,
    ScrollView
} from 'react-native';
import Logo from '../../components/Logo'



export default class AddPost extends Component {

    state = {category:'',
        myNumber: ''}


    render() {
        return (

            <ScrollView style={{ backgroundColor:'#fff'}}>

                <View style={styles.container}>
                    <View style={{alignSelf:'center'}}>
                        <Logo/>
                        <Text style={{textAlign:'center'}}>
                            Ajout d'une nouvelle publication
                        </Text>
                    </View>

                    <Picker
                        selectedValue={this.state.category}
                        style={{ height: 70, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
                        <Picker.Item label="PHP" value="PHP" />
                        <Picker.Item label="CSS" value="CSS" />
                        <Picker.Item label="WEBMOBILE" value="WEBMOBILE" />
                        <Picker.Item label="GRAPHISME" value="GRAPHISME" />
                        <Picker.Item label="HTML" value="HTML" />
                    </Picker>

                    <TextInput
                        placeholder="Titre"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={styles.input}/>
                    <TextInput
                        placeholder="Description"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={styles.input}/>
                    <TextInput
                        placeholder="Prix"
                        keyboardType= 'numeric'
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        maxLength={3}
                    />
                    <TextInput
                        placeholder="Prérequis"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        secureTextEntry
                        style={styles.input}/>
                    <TextInput
                        placeholder="Objectifs"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={styles.input}/>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Contenu"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={{ height: 150,
                            marginBottom: 10,
                            color: '#000000',
                            paddingHorizontal: 10}}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Partager la publication
                        </Text>

                    </TouchableOpacity>

                </View>
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