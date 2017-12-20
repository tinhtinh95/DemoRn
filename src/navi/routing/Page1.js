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


export default class Page1 extends React.Component{
  render(){
    return(
      <View style={{justifyContent:'center', alignItems:'center',padding:40, backgroundColor:'green'}}>
        <TouchableOpacity onPress={()=>Actions.page2()}><Text>Go to page 2</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.page3()}><Text>Go to page 3</Text></TouchableOpacity>
      </View>
    )
  }
}
