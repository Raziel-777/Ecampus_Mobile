import React, {Component} from 'react';
import {
    View,
    Text,
    PermissionsAndroid,
} from 'react-native'


export default class Geoloc extends Component {



    constructor(props) {
        super(props);
        this.state = {
            Position: '',
            latitude: '',
            longitude: ''
        };



    }

    async componentDidMount() {

            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Je veux savoir où t\'es ! ',
                        'message': 'Accepte steuplait.'
                    }
                );
                console.log(granted);
            } catch (err) {
                console.warn(err)
            }


        try {
            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }

            navigator.geolocation.getCurrentPosition((position) => {
                const realPosition = JSON.stringify(position);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    Position: realPosition,
                });
            }, error, { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
        }
        catch (e) {
            console.log(e)
        }
    }

    render() {

        return (
            <View style={{flex: 1}}>

                <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                    <View style={{backgroundColor: 'teal', borderRadius: 3, margin: 10, padding: 30,  alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>
                            Latitude:
                            {this.state.latitude}

                        </Text>
                    </View>
                    <View style={{backgroundColor: 'teal', borderRadius: 3, margin: 10, padding:30, alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>

                            Longitude:
                            {this.state.longitude}
                        </Text>
                    </View>

                </View>
            </View>


        )
    }

}