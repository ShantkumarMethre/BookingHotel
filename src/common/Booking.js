
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, Button, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
class Booking extends Component {
    static navigationOptions = {

        header: null,
    };
    render() {
        return (
            <View style={{
                flex: 1, justifyContent: "space-between",
                alignItems: "center",
            }}>
                <View style={{
                    height: 200,
                    width: deviceWidth,
                    // borderRadius: 8,
                    // shadowRadius: 8,
                    shadowColor: 'grey',
                    shadowOpacity: 1,
                    elevation: 8,


                }}>
                    <ImageBackground source={{ uri: this.props.navigation.state.params.url }} style={{ width: deviceWidth, height: deviceWidth, }}>


                        <View style={{
                            borderColor: "white",
                            height: 20,
                            position: 'absolute',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            bottom: 20,
                            //    right:(deviceWidth /3)/2-15
                            alignSelf: "center"
                        }}>

                            <Text style={{ color: "white" }}>{this.props.navigation.state.params.name}</Text>


                        </View>
                    </ImageBackground>

                </View>


                <View style={{ justifyContent: "space-between" }}>
                    <View style={{}}>
                        <Text style={{ fontWeight: 'bold', color: "black" }}>
                            date and  Time  of booking:
                           </Text>
                        <Text>
                            June 27th 2019
                           </Text>
                        <Text>the {this.props.navigation.state.params.start} --> {this.props.navigation.state.params.endTime}</Text>

                    </View>
                    <View style={{ marginTop: 30 }}>

                        <Text style={{ fontWeight: 'bold', color: "black" }}>
                            About The Room
                           </Text>
                        <Text>the {this.props.navigation.state.params.name} is {this.props.navigation.state.params.floor}</Text>
                    </View>

                </View>
                <View style={{}}>
                    <Button
                        onPress={this.clickHandle.bind(this)}
                        title="Book"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>

            </View>


        );
    }
    clickHandle(){
        this.props.navigation.state.params.onSelect(this.props.navigation.state.params.id,
            this.props.navigation.state.params.start,this.props.navigation.state.params.endTime,
            this.props.navigation.state.params.name)
        this.props.navigation.navigate("Book")
    }
}

export default withNavigation(Booking)