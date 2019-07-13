import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { CardSection } from './common/index.a';
import TileGrid from './common/TileGrid'
import axios from 'axios';
import TimePicker from "react-native-24h-timepicker";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class App extends Component {

  constructor(props) {
    super(props);

    this._clickTile = this._clickTile.bind(this),
      this.onSelect = this.onSelect.bind(this)
    this.state = {
      isLoading: true,
      dataSource: '',
      rSIZE: 2,
      cSIZE: 2,
      startime: null,
      endTime: null,
      selectedHours: 0,
      status: this.status(props),
      user: [],
      dataList: [{
        "url": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "name": "The Oval",
        "floor": "3rd floor"
      },

      {
        "url": "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "The Corber",
        "floor": "1st floor"
      },
      {
        "url": "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "The Corber",
        "floor": "1st floor"
      },
      {
        "url": "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "PMO",
        "floor": "2nd floor"
      },],
    }


  }
  status(props) {
    let statuses = new Array(2 * 2)
    for (let i = 0; i < statuses.length; i++) {
      statuses[i] = 'visible';
    }
    return statuses;
  }

  onCancel() {
    this.TimePicker.close();
  }
  onCancelend() {
    this.TimePicker2.close();
  }

  onConfirm(hour, minute) {
    console.log("use data ius")
    console.log(this.state.user);
    if (this.state.startime != null) {
      console.log(this.state.user);
      this.state.user.map((key, value) => {
        if (key != this.state.startime) {
          this.setState({
            ...this.state,
            user: [],
            status: this.state.status.map((val, index) => {
              return 'visible'
            })

          })
        }

      })
    }
    this.setState({ startime: `${hour}:${minute}` });

    this.TimePicker.close();
  }

  onConfirmEnd(hour, minute) {
    this.setState({ endTime: `${hour}:${minute}` });

    this.TimePicker2.close();
  }

  render() {

    const { navigate } = this.props.navigation;
    console.log(this.state.status);
    return (
      <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center" }}>
        <Text>
          Richmound Town
        </Text>
        <Text>
          27-jul-2019
        </Text>


        <View>
          <Text>
            select time to book to hotel
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => this.TimePicker.open()}
              >
                <View style={{ backgroundColor: "green" }}>
                  <Text style={{ color: "white" }}>TIMEPICKERStart</Text>
                </View>
              </TouchableOpacity>
              <TimePicker
                ref={ref => {
                  this.TimePicker = ref;
                }}
                onCancel={() => this.onCancel()}
                onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
              />
              <Text>{this.state.startime}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.TimePicker2.open()}
              >
                <View style={{ backgroundColor: "green" }}>
                  <Text style={{ color: "white" }}>TIMEPICKERend</Text>
                </View>
              </TouchableOpacity>
              <TimePicker
                ref={ref => {
                  this.TimePicker2 = ref;
                }}
                onCancel={() => this.onCancelend()}
                onConfirm={(hour, minute) => this.onConfirmEnd(hour, minute)}
              />
              <Text>{this.state.endTime}</Text>
            </View>
          </View>
        </View>

        <TileGrid

          numRows={this.state.rSIZE}
          numCols={this.state.cSIZE}
          data={this.state.dataList}
          statuses={this.state.status}
          style={{
            width: deviceWidth / 1.2,
            height: deviceHeight,

          }}

          onPress={this._clickTile.bind(this)}
          onDelete={this._clickDelete}

        />

      </View>

    );
  }

  _clickTile = (text, url, id, floor) => {


    // this.setState({
    //   ...this.state,
    //   status: this.state.status.map((val, index) => {
    //     return id == index ? 'invisible' : val
    //   })
    // })

    // if (this.state.startime && this.state.startime) {
    //   const newObject = {
    //     "id": id,
    //     "intitTime": this.state.startime,
    //     "endTime": this.state.startime
    //   }
    //   this.setState((prevState) => (
    //     Object.assign(
    //       {},
    //       this.state,
    //       { user: [...prevState.user, newObject] }
    //     )
    //   ));
    // }
    this.state.startime && this.state.startime ? this.props.navigation.navigate("Booking", {
      id: id, url: url, name: text, floor: floor,
      start: this.state.startime, endTime: this.state.endTime, onSelect: this.onSelect
    }) : "";

  }
  onSelect = (id, startTime, endTime, name) => {

    this.setState({
      ...this.state,
      status: this.state.status.map((val, index) => {
        return id == index ? 'invisible' : val
      })
    })
    console.log(this.state.status)
    const newObject = {
      "id": id,
      "startTime": startTime,
      "endTime": endTime,
      "name": name
    }
    this.setState((prevState) => (
      Object.assign(
        {},

        { user: [...prevState.user, newObject] }
      )
    ));
  }

}

