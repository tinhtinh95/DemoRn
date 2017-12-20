import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button,

} from 'react-native';


export default class SchoolScreen extends React.Component {
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


