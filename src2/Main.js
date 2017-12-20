import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';



export default class Main extends Component{
  

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[{key:'a'},{key:'b'}]}
                    renderItem={({item})=> <Text>{item.key}</Text>}
                >
                </FlatList>
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

