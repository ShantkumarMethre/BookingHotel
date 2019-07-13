
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground, Button } from 'react-native';

let deviceWidth = Dimensions.get('window').width;
export default class Book extends Component {
    static navigationOptions = {

        header: null,
    };
    render() {

        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>
                    booked conformation
                    </Text>
            </View>



        );
    }
}