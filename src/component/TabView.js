import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer, } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Overview from './Overview';
import Stars from './Stars';
import Followers from './Followers';
import Following from './Following';
import App from '../App';

// envelope
// user
// paper-plane
// th-large
const TopNavigator = createBottomTabNavigator({
  App: {
    screen: App,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        tintColor: '#333',
        activeTintColor: 'yellow',
      },

      tabBarIcon: ({ tintColor }) => (
        //Your icon component for example => 

        <Icon name="globe" size={30} color={tintColor} />
      )
    },
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  },
  Overview: {
    screen: Overview,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        tintColor: '#333',
        activeTintColor: 'yellow',
      },

      tabBarIcon: ({ tintColor }) => (
        //Your icon component for example => 
        <Icon name="envelope" size={30} color={tintColor} />
      )
    },
  },

  Stars: {
    screen: Stars, navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        tintColor: '#333',
        activeTintColor: 'yellow',
      },

      tabBarIcon: ({ tintColor }) => (
        //Your icon component for example => 
        <Icon name="paper-plane" size={30} color={tintColor} />
      )
    },
    // tabBarOptions: {
    //   activeTintColor: '#e91e63',
    //   showLabel: false,
    //   showIcon: true,
    //   labelStyle: {
    //     fontSize: 12,
    //   },
    //   style: {
    //     backgroundColor: 'blue',
    //   },
    // },
  },
  Followers: {
    screen: Followers,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        tintColor: '#333',
        activeTintColor: 'yellow',
      },

      tabBarIcon: ({ tintColor }) => (
        //Your icon component for example => 
        <Icon name="th-large" size={30} color={tintColor} />
      )
    },
  },
  Following: {
    screen: Following,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        tintColor: '#333',
        activeTintColor: 'yellow',
      },

      tabBarIcon: ({ tintColor }) => (
        //Your icon component for example => 
        <Icon name="user" size={30} color={tintColor} />
      )
    },
  },

},

);

const TabView = createAppContainer(TopNavigator)
export default TabView;