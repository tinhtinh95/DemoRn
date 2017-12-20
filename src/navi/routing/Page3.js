import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,

} from 'react-native';
import { Router,Scene,Actions } from 'react-native-router-flux';


export default class Page3 extends React.Component{
  render(){
    return(
      <View style={{justifyContent:'center', alignItems:'center',padding:40,backgroundColor:'blue'}}>
        <TouchableOpacity onPress={()=>Actions.page1()}><Text>Go to page 1</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.page2()}><Text>Go to page 2</Text></TouchableOpacity>
      </View>
    )
  }
}
