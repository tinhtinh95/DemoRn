import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button,

} from 'react-native';


export default class HomeScreen extends React.Component {
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

