import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Word from './FlatListItem';
import {connect} from 'react-redux';


class NEEDPRACTICE extends Component{
    static navigationOptions={
       title:"NEEDPRACTICE",
    //    headerTintColor: 'blue',
    //    headerStyle: {
    //      backgroundColor: 'red'
    //    },
    }
    getListWord(){
        const {myArrWords}=this.props;
        return myArrWords.filter(e =>!e.memorized);
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList style={{marginTop:10}}
                    data={this.getListWord()}
                    renderItem={({item})=> <Word myWord={item}></Word>}
                    keyExtractor={item=>item.id}
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
export default connect(mapStateToProps)(NEEDPRACTICE);


const styles=StyleSheet.create
({
    container:{
        flex:1,flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'#1abc9a',
    },
    buttonText:{
        color:'red',
    }
});

