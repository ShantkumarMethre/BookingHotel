import React, { Component, PureComponent } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    View
} from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default class Tile extends Component {
    _onPressIn() {
        console.log('_onPressIn')
        this.props.onPress(this.props.fields.name, this.props.fields.url, this.props.id, this.props.fields.floor)
    }



    render() {
        console.log('Tile.render:' + this.props.fields.date)
        const opacity = this.props.status == "visible" ? 1 : 0.3;

        return (

            <Animatable.View
                ref="view"
                useNativeDriver={true}
                style={[
                    this.props.style,
                    {
                        alignItems: 'flex-start',
                        alignSelf: 'center',
                    }
                ]}
            >

                <View
                    ref="inner"
                    onStartShouldSetResponder={(e) => true}
                    onResponderGrant={(e) => { this._onPressIn() }}
                    style={{
                        height: this.props.style.height,
                        width: this.props.style.width,
                        borderRadius: 8,
                        position: 'absolute',
                        // top: this.state.pressed ? 5 : 0,
                        justifyContent: "space-around",
                        alignItems: "center",
                        shadowRadius: 8,
                        shadowColor: 'grey',
                        shadowOpacity: 1,
                        elevation: 8,
                        margin: 10,

                        //   ...stylesForView
                    }} >
                    <ImageBackground source={{ uri: this.props.fields.url }} style={{ width: this.props.style.width, height: this.props.style.width, margin: 10 }} imageStyle={{ borderRadius: 15, opacity: opacity }}>

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
                            <Text style={{ color: "white" }}>{this.props.fields.name}</Text>
                            <Text style={{ color: "white" }}>{this.props.fields.floor}</Text>

                        </View>

                    </ImageBackground>

                </View>

            </Animatable.View>

        )
    }
}


