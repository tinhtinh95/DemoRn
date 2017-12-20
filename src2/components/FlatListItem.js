import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';



export default class Main extends Component{
  

    render(){
        return(
            <View style={styles.container}>
                <Text>
                    
                </Text>
                <TouchableOpacity><Text>Show</Text></TouchableOpacity>
            </View> 
        )
    }
}
const styles=StyleSheet.create
({
    container:{
        flex:1,flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#1abc9a',
    },
    buttonText:{
        color:'red',
    }
});


