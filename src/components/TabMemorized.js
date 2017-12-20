import React,{Component} from 'react';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import {filter_show_all,filter_memorized,filter_need_practice} from '../redux/actionCreators';

class Filter extends Component{
    getTextStyle(statusName){
        const {myFilterStatus}=this.props;
        if(statusName == myFilterStatus) return {color: 'yellow',fontWeight:'bold'}
        return styles.buttonText;
    }
    setFilterStatus(actionType){
        this.props.dispatch({type:actionType}); // day la truyen vao thuoc tinh type co san roi
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this.props.filter_show_all()}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.filter_memorized()}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.filter_need_practice()}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
                </TouchableOpacity>
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
        backgroundColor:'black',
    },
    buttonText:{
        color:'red',
    }
});

function mapState(state){
return {myFilterStatus: state.filterStatus}
}
export default connect(mapState,{filter_memorized,filter_need_practice,filter_show_all})(Filter);