import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import store from './redux/store';
import Main  from './components/Main';
import {Provider}  from 'react-redux';


export default class App extends Component{
  

    render(){
        return(
            <Provider store={store}>
                <Main />
            </Provider> 
        )
    }
}
const styles=StyleSheet.create
({
    container:{
        flex:1,flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'blue',
    },
    buttonText:{
        color:'red',
    }
});

