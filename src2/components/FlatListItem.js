import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';



export default class Word extends Component{
  

    render(){
        const {en,vn,memorized}=this.props.myWord;
        const textDecorationLine=memorized ? 'line-through':'none';
        return(
            <View style={styles.container}>
                <View style={{padding:5}}>
                    <Text style={{textDecorationLine:textDecorationLine}}>
                        {en}
                    </Text>
                    <Text>
                    {vn}
                    </Text>
                </View>
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
        backgroundColor:'#1abc1f',
        borderWidth: 1,
        padding:5,
        marginTop:10
    },
    text:{
        
    },
    buttonText:{
        color:'red',
    },

});


