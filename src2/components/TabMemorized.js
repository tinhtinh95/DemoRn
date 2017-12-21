import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Word from './FlatListItem';
import {connect} from 'react-redux';


class MEMORIZED extends Component{
    static navigationOptions={
        title:"MEMORIZED"
    }
    getListWord(){
        const {myArrWords}=this.props;
        return myArrWords.filter(e=>e.memorized);
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList style={{marginTop:10}}
                    data={this.getListWord()}
                    renderItem={({item})=> <Word myWord={item}></Word>}
                >
                </FlatList>
            </View> 
        )
    }
}
function mapStateToProps(state){
    return {
        myArrWords: state.arrWords,
    }
}
export default connect(mapStateToProps)(MEMORIZED);


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

