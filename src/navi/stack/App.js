/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';
import HomeScreen from './Home';
import SchoolScreen from './School';


// class Home extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome'
//   };
//   render() {
//     return <Text>Hello, This is navigaiton!</Text>;
//   }
// }

const SimpleApp = StackNavigator({
  Home: { 
    // path:'./tab/Home',
  screen: HomeScreen },
  School: { screen: SchoolScreen },

  
});

export default class App extends React.Component {
  render() {
    return <SimpleApp style={styles.container}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
