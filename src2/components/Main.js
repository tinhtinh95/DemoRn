import React,{Component} from 'react';
import {TabNavigator,DrawerNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import Word from './FlatListItem';
import {connect} from 'react-redux';
import SHOWALL from './TabShowAll';
import MEMORIZED from './TabMemorized';
import NEEDPRACTICE from './TabNeedPractice';
import AddWord from './AddWord';
const Tab=TabNavigator({
    ShowAll:{screen: SHOWALL},
    Memorized:{screen: MEMORIZED},
    NeedPratice:{screen: NEEDPRACTICE},
})
class Main1 extends Component{
    static navigationOptions = {
        drawerLabel: 'Home',
      };
    render(){
        return(
            <View style={styles.container}>
                <Tab/>
            </View> 
        )
    }  
}


const MyApp = DrawerNavigator({
    Home: {
      screen: Main1,
    },
    Notifications: {
      screen: AddWord,
    },
  });

export default  class Main extends Component{
    static navigationOptions = {
        headerTintColor: 'blue',
        headerStyle: {
          backgroundColor: 'red'
        },
        headerLeft: <Button onPress={()=>{}} title="Menu" />,
      };
    render(){
        return(
            <View style={styles.container}>
                <MyApp/>
            </View> 
        )
    }
}


const styles=StyleSheet.create
({
    container:{
        flex:1,
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'space-around',
        backgroundColor:'#1abc9a',
    },
    buttonText:{
        color:'red',
    }
});

