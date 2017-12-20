
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { Router,Scene } from 'react-native-router-flux';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="page1" component={Page1} intial  />
          <Scene key="page2" component={Page2}  />
          <Scene key="page3" component={Page3}  />
        </Scene>
      </Router>
    )
  }
}