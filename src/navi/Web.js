import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ListView,
  RefreshControl,
  Alert,
  TextInput,
  TouchableOpacity,Dimensions, KeyboardAvoidingView
} from 'react-native';

var width = Dimensions.get('window').width;
export default class App extends React.Component {
constructor(props){
    super(props);
    this.state={
        so1:"",
        so2:"",
        rs:"...",
    }
}
_sendToServer(){
    console.log("ahihi");
    fetch('http://192.168.21.122/WebService/service.php',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify({
          firstParam: this.state.so1,
          secondParam: this.state.so2,
        }),
      })
    .then((response)=> response.json())
    .then((responseJson)=>{
        console.log("+++++++");
        this.setState({rs: responseJson.kq});
    })
    .catch((err)=>{
        console.log(err);
    });
}
  render() {
    return(
        <KeyboardAvoidingView style={sty.container}>
            <TextInput style={sty.text} onChangeText={(so1)=> this.setState({so1})} value={this.state.so1} />
            <TextInput style={sty.text} onChangeText={(so2)=> this.setState({so2})} value={this.state.so2} />
            <TouchableOpacity style={sty.submit} onPress={()=>{this._sendToServer()}} >
                <Text>Submit</Text>
            </TouchableOpacity>
            <Text> {this.state.so1} + { this.state.so2} = Result: {this.state.rs}</Text>
        </KeyboardAvoidingView>
    )
  }
 
}
const sty=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#34495e',
        padding:10,
        height:40,
        backgroundColor:'#ecf0f1',
        marginBottom:5,
        fontWeight:'bold',
        width:width* .8,
    },
    submit:{
        backgroundColor:"#f0f",
        padding:10,
        
    }
})
