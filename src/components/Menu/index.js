import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export default class Menu extends Component {
    render() {
        return (

            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity style={styles.mainNav}>
                    <Text style={styles.mainNavText}>
                        Tous
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.thenNav}>
                    <Text style={styles.thenNavText}>
                        PHP
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.thenNav}>
                    <Text style={styles.thenNavText}>
                        HTML
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.thenNav}>
                    <Text style={styles.thenNavText}>
                        CSS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.thenNav}>
                    <Text style={styles.thenNavText}>
                        WebMobile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.thenNav}>
                    <Text style={styles.thenNavText}>
                        Recette
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    mainNav: {
        backgroundColor: 'teal',
        padding: 10,
        borderRadius: 2,
    },
    mainNavText: {
        color: 'white'
    },
    thenNav: {
        padding: 10,
    },
    thenNavText: {
        color: 'teal',
    },

});