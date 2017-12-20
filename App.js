import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';


class MemorrizedScreen extends Component {
  static navigationOptions = {
    title: 'MEMORIZED'
  };
  render() {
      const {navigate} =this.props.navigation;
        return (
            <View>
              <TouchableOpacity style={styles.container}>
                <Text>MEMORIZED</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

class ShowAllScreen extends Component {
  static navigationOptions = {
    title: 'SHOW ALL'
  };
    render() {
        return (
          <TouchableOpacity style={styles.container}>
                <Text>Show All</Text>
            </TouchableOpacity>
        )
    }
}
class NeedPracticeScreen extends Component {
  static navigationOptions = {
    title: 'NEED PRACTICE'
  };
    render() {
        return (
          <TouchableOpacity style={styles.container}>
          <Text>NeedPractice</Text>
      </TouchableOpacity>
        )
    }
}
const Tab=TabNavigator({
    Home: {screen:ShowAllScreen},
    Memorized: {screen: MemorrizedScreen},
    NeedPractice: {screen:NeedPracticeScreen},
})


export default class App extends Component{
  

    render(){
        return(
            <View style={styles.container}>
                <Tab />
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
        backgroundColor:'blue',
    },
    buttonText:{
        color:'red',
    }
});

