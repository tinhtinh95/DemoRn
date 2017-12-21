import React,{Component} from 'react';
import {TabNavigator,DrawerNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList, TextInput, Dimensions } from 'react-native';
import {connect} from 'react-redux';




class AddWord extends Component{
    static navigationOptions = {
        drawerLabel: 'Add New Word',
      };

    constructor(props){
        super(props);
        this.state={
            en:'',
            vn:''
        }
    }
    addWord=()=>{
        const{en,vn}=this.state;
        if(en!=='' && vn!==''){
            this.props.dispatch({type:'AddWord',en,vn});
            this.props.navigation.navigate('Home');
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.labelText}>Add New Word</Text>
                <TextInput  
                value={this.state.en}
                style={styles.text} 
                placeholder="Enter word" 
                onChangeText={text=>this.setState({en:text})}/>
                <TextInput 
                value={this.state.vn}
                style={styles.text} 
                placeholder="Meaning" 
                onChangeText={(text)=>this.setState({vn:text})}/>
               <View style={{flexDirection:'row'}}>
                    <TouchableOpacity 
                    onPress={this.addWord}
                    style={styles.buttonText}
                    >
                        <Text>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Home')}
                    style={styles.buttonText}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>
               </View>
            </View> 
        )
    }
}
export default connect()(AddWord);

var width = Dimensions.get('window').width;

const styles=StyleSheet.create
({
    container:{
        flex:1,
        // flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1abc9a',
    },
    labelText:{
        color:'red',
        margin:30,
        fontSize:20,
        fontWeight:'bold'
    },
    text:{
        width:width * .9,
        height:40,
        borderWidth:1,
        backgroundColor:"#ffffcd",
        margin:10
    },
    buttonText:{
        color:'#1abc9a',
        backgroundColor:"yellow",
        padding:5,
        margin:10,
        
    },
});

