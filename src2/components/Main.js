import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Word from './FlatListItem';
import {connect} from 'react-redux';
import SHOWALL from './TabShowAll';
import MEMORIZED from './TabMemorized';
import NEEDPRACTICE from './TabNeedPractice';

const Tab=TabNavigator({
    ShowAll:{screen: SHOWALL},
    Memorized:{screen: MEMORIZED},
    NeedPratice:{screen: NEEDPRACTICE},
})

export default class Main extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Tab/>
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

