import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Word from './FlatListItem';
import {connect} from 'react-redux';


class SHOWALL extends Component{
    static navigationOptions={
        title:"SHOW ALL"
    }
    getWordList(){
        const {myArrWords}=this.props;
        return myArrWords;
    }
    render(){
        return(
            <View style={styles.container}>

                <FlatList style={{marginTop:10}}
                    data={this.getWordList()}
                    renderItem={({item}) => <Word myWord={item}/>}
                    keyExtractor={item =>item.id}
                    >
                     </FlatList>
            </View> 
        )
    }
}
function mapStateToProps(state){
    return {
        myArrWords: state.arrWords,
    };
}
export default connect(mapStateToProps)(SHOWALL);


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

