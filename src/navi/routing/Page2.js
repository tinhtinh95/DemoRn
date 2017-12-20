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


export default class Page2 extends React.Component{
  render(){
    return(
      <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'red',padding:40}}>
        <TouchableOpacity onPress={()=>Actions.page2()}><Text>Go to page 1</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.page3()}><Text>Go to page 3</Text></TouchableOpacity>
      </View>
    )
  }
}
