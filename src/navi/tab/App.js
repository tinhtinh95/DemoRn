/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';
// import HomeScreen from './Home';
// import SchoolScreen from './School';

const SimpleApp = TabNavigator({
  Home: { screen: HomeScreen },
  School: { screen: SchoolScreen },
  
});

export default class App extends React.Component {
  render() {
    return <SimpleApp style={styles.container}/>;
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
      const {navigate} =this.props.navigation;
    return (

        <View style={styles.container}>
            <Text>Hello, This is Home!</Text>
            <Button title="Go to school"
            onPress={()=> navigate('School')}
            />
        </View>
    )
  }
}

class SchoolScreen extends React.Component {
  static navigationOptions = {
    title: 'School'
  };
  render() {
    const{navigate}=this.props.navigation;
    return(
      <View style={styles.container}>
      <Text>Hi, This is School.</Text>
      <Button title='Back to home'
      onPress={()=>navigate('Home')}
      />
      </View>
    )
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
