import React,{Component} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import {connect} from 'react-redux';
import {add_word,toggleIsAdding} from '../redux/actionCreators';

var width = Dimensions.get('window').width;
class Form extends Component{
   constructor(props){
       super(props);
       this.state={
           en:'',
           vn:'',
       };
    //    this.onAdd=this.onAdd.bind(this);
   }
   onAdd(){
       const{en,vn}=this.state;
       this.props.add_word(en,vn);
        this.props.toggleIsAdding();
   }

    render(){
        return(
            <View style={styles.container}
            >
               <TextInput 
               value={this.state.en}
                placeholder="English"
               onChangeText={text=>this.setState({en:text})}
               style={styles.textInput}/>
               <TextInput 
               value={this.state.vn}
               placeholder="Meaning"
               onChangeText={text=>this.setState({vn:text})}
               style={styles.textInput}/>
                <TouchableOpacity
                onPress={()=>this.onAdd()}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default connect(null, {add_word,toggleIsAdding})(Form);

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'stretch',

    },
    textInput:{
        height:40,
       width:width* 1,
       margin:10,
        backgroundColor:'gray',
        paddingHorizontal:10,

    }
})
