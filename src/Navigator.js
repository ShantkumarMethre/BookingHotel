
import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';

import Book from './common/Book';
import Booking from './common/Booking';
import TabView from './component/TabView';
const MainNavigator = createStackNavigator({

  TabView: { screen: TabView },

  Booking: {
    screen: Booking,

  },
  Book: { screen: Book },



},

  {
    initialRouteName: 'TabView'
  });
const RootNavigator = createAppContainer(MainNavigator);
export default RootNavigator;