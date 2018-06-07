import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';


export default class App extends Component {
    render() {
        return (

            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{marginTop: 100, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{width: 200}}>
                        <Text style={styles.title}> Titre du tutoriel </Text>
                        <Text style={styles.description}>Description du tutoriel, ceci est un tuto qui explique comment
                            devenir un maître en PHP</Text>
                    </View>
                    <View>
                        <Image style={styles.imgDetail} source={require('./src/assets/Images/PHP.jpg')}/>
                    </View>
                </View>
                <ScrollView style={{marginTop: 20}}>
                    <Text style={styles.content}>
                        Dans ce tutoriel vous allez apprendre à coder en PHP comme les meilleurs dev de la planête.
                    </Text>
                </ScrollView>
                <View>
                    <Text style={styles.autor}>Ecrit par Jean Miche, le 10/04/1017</Text>
                    /* TODO add autor link to autor profil */
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 25,
    },

    description: {
        margin: 5,

    },

    content: {
        margin: 5,
    },

    imgDetail: {
        width: 120,
        height: 120,
        marginRight: 5,
    },

    autor: {
        margin: 5,
    },
});

