import React, { PureComponent, Component } from 'react';
import { Text, View, StyleSheet, Animated, Easing, TouchableOpacity, ScrollView } from 'react-native';
// import * as Animatable from 'react-native-animatable'
import Tile from './Tile'


export default class TileGrid extends PureComponent {
    render() {
        console.log('TileGrid.render')
        const cellSize = Math.min(
            Math.floor(this.props.style.width / (this.props.numCols)),
            Math.floor(this.props.style.height / (this.props.numRows))
        )

        const padding = Math.floor(cellSize * .05)
        const borderRadius = padding * 2
        const tileSize = cellSize
        const topOffset = Math.floor((this.props.style.height - cellSize * 10) / 130)
        const leftOffset = Math.floor((this.props.style.width - cellSize * this.props.numCols) / 2)
        let result = []
        for (let row = 0; row < this.props.numRows; row++) {
            for (let col = 0; col < this.props.numCols; col++) {
                let id = row * this.props.numCols + col;
                console.log(this.props.data)
                console.log(id)
                result.push(
                    <Tile
                        key={id}
                        id={id}
                        delegateTouch={this.props.delegateTouch}
                        onPress={this.props.onPress}
                        onDelete={this.props.onDelete}
                        fields={this.props.data[id]}
                        status={this.props.statuses[id]}
                        style={{
                            top: row * cellSize + topOffset,
                            left: col * cellSize + leftOffset,
                            position: 'absolute',
                            width: tileSize - 10,
                            height: tileSize - 10
                        }}
                    />
                )
            }
        }
        return (

            <View style={this.props.style}>
                {result}
            </View>
        )
    }
}
