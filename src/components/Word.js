import React,{Component} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {connect} from 'react-redux';
import {toggleShow,toggleMemorized} from '../redux/actionCreators';

class Word extends Component{
    memorizedWord(){
        this.props.toggleMemorized(this.props.myWord.id);
    }
    
    isShow(){
        this.props.toggleShow(this.props.myWord.id);
    }

    render(){
        const{en,vn,memorized,isShow} =this.props.myWord;
        const textDecorationLine= memorized ? 'line-through' :'none';
        const memorized_forget= memorized ? 'Forget' :'Memorized';
        const meaning=isShow ? vn : '';
        const show_unShow=isShow ? 'UnShow' : 'Show';
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Text style={{textDecorationLine, color:'white'}}>{en}</Text>
                <Text style={{ color:'white'}}>{meaning}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity
                    onPress={this.memorizedWord.bind(this)}
                    style={styles.button}>
                        <Text style={{color:'white'}}>{memorized_forget}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>this.isShow()}
                    style={styles.button}>
                        <Text style={{color:'white'}}>{show_unShow}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        padding:10,
        borderWidth:1,
        margin:10,
        padding:10,
        backgroundColor:'blue'
    },
    controller:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    button:{
        // flexDirection:'row',
        // justifyContent:'space-around',
        backgroundColor:'green',
        padding:10,
        margin:10,
        
    }
});

export default connect(null, {toggleMemorized, toggleShow})(Word);