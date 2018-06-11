import  React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Picker,
    ScrollView,
    Alert
} from 'react-native';
import Logo from '../../components/Logo'
import TokenStorage from "../../services/TokenStorage";



export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {category_id: 0,
            title: '',
            description: '',
            price: null,
            required: '',
            goals: '',
            content: ''};
    }

    async onSubmit() {

        if (this.state.category_id === 0) {
            Alert.alert(
                'Oups !',
                'Categorie requise',
                [
                    {text: 'Cancel'}
                ],
                {cancelable: false}
            );
        } else if (this.state.title === '') {
            Alert.alert(
                'Oups !',
                'Titre requis',
                [
                    {text: 'Cancel'}
                ],
                {cancelable: false}
            );

        } else if (this.state.title.length > 150) {
            Alert.alert(
                'Oups !',
                'Votre titre est trop long, max 150',
                [
                    {text: 'Cancel'}
                ],
                {cancelable: false}
            );
        } else if (this.state.description.length > 255) {
            Alert.alert(
                'Oups !',
                'Votre description est trop longue',
                [
                    {text: 'Cancel'}
                ],
                {cancelable: false}
            );
        } else if (this.state.content === '') {
            Alert.alert(
                'Oups !',
                'Contenu requis',
                [
                    {text: 'Cancel'}
                ],
                {cancelable: false}
            );
        } else if (this.state.required > 100) {
            Alert.alert(
                'Oups !',
                'Prérequis trop long, max 100',
                [
                    {text: 'Cancel'}
                ],
                {cancelable: false}
            );
        } else if (this.state.goals > 100) {
            Alert.alert(
                'Oups !',
                'Objectifs trop long, max 100',
                [
                    {text: 'Cancel'}
                ],
                {cancelable: false}
            );
        } else {

            try {
                let response = await fetch('https://test.ecampus.click/api/publications/addPubli', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + TokenStorage.token
                    },
                    body: JSON.stringify({
                        'type': 'tutorial',
                        'category_id': this.state.category_id,
                        'title': this.state.title,
                        'description': this.state.description,
                        'price': this.state.price,
                        'required': this.state.required,
                        'goals': this.state.goals,
                        'content': this.state.content,
                        'user_id' : TokenStorage.id
                    }),

                });
                if (response.status !== 200) {
                    Alert.alert(
                        'Oups !',
                        'Une erreur est survenue, désolé',
                        [
                            {text: 'Cancel'}
                        ],
                        {cancelable: false}
                    );
                } else {
                    this.props.navigation.navigate('List')}

            } catch (e) {
                console.log(e)
            }
        }

    }

    render() {
        return (

            <ScrollView keyboardShouldPersistTaps='always'
                style={{ backgroundColor:'#fff'}}>

                <View style={styles.container}>
                    <View style={{alignSelf:'center'}}>
                        <Logo/>
                        <Text style={{textAlign:'center'}}>
                            Ajout d'une nouvelle publication
                        </Text>
                    </View>

                    <Picker
                        selectedValue={this.state.category_id}
                        style={{ height: 70, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({category_id: itemValue})}>
                        <Picker.Item label="Veuillez choisir une catégorie" value={0}/>
                        <Picker.Item label="PHP" value={1}/>
                        <Picker.Item label="CSS" value={5} />
                        <Picker.Item label="WEBMOBILE" value={3} />
                        <Picker.Item label="GRAPHISME" value={4} />
                        <Picker.Item label="HTML" value={2} />
                    </Picker>

                    <TextInput
                        placeholder="Titre"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={styles.input}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}/>
                    <TextInput
                        placeholder="Description"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={styles.input}
                        onChangeText={(description) => this.setState({description})}
                        value={this.state.description}/>
                    <TextInput
                        placeholder="Prix, ne pas remplir si gratuit"
                        keyboardType= 'numeric'
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        maxLength={3}
                        onChangeText={(price) => this.setState({price})}
                        value={this.state.price}
                    />
                    <TextInput
                        placeholder="Prérequis"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={(require) => this.setState({require})}
                        value={this.state.require}/>
                    <TextInput
                        placeholder="Objectifs"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={styles.input}
                        onChangeText={(goals) => this.setState({goals})}
                        value={this.state.goals}/>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Contenu"
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        style={{ height: 150,
                            marginBottom: 10,
                            color: '#000000',
                            paddingHorizontal: 10}}
                        onChangeText={(content) => this.setState({content})}
                        value={this.state.content}
                    />
                    <TouchableOpacity onPress={() => this.onSubmit()} style={styles.buttonContainer}>
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