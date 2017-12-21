import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';



class Word extends Component{
    render(){
        const {en,vn,memorized, isShow}=this.props.myWord;
        const textDecorationLine=memorized ? 'line-through':'none';
        const meaning=isShow ? vn : ''
        const show=isShow ? 'Un Show': 'Show'
        return(
            <View style={styles.container}>
                <View style={{padding:5}}>
                    <Text style={{textDecorationLine:textDecorationLine}}>
                        {en}
                    </Text>
                    <Text>
                    {meaning}
                    </Text>
                </View>
                <TouchableOpacity 
                onPress={()=>this.props.dispatch({type: 'SHOW', id:this.props.myWord.id})}
                style={styles.buttonText}>
                    <Text>{show}</Text>
                </TouchableOpacity>
            </View> 
        )
    }
}
export default connect()(Word);
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
        backgroundColor:'yellow',
        borderWidth:1,
        padding:5
    },

});


