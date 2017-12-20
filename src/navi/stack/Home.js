import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,

} from 'react-native';


class FlastItem extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    
    // const {navigate} =this.props.navigation;
    return(
      <FlatList
      data={[{key: 'a', name:'Tinh'}, {key: 'b',name:'Tina'}]}
      renderItem={({item}) => 
        <TouchableOpacity onPress={()=>{this.props.navi.navigate('School', {user:item.name})}}>
          <Text>{item.key}</Text>
        </TouchableOpacity>

     }
     >

     </FlatList>
    )
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerTinColor: 'red',
    color:'yellow'
  };
  render() {
      const {navigate} =this.props.navigation;
    return (

        <View>
            <Text>Hello, This is Home!</Text>
            <FlastItem navi={this.props.navigation}/>
            {/* <Button title="Go to school"
            onPress={()=> navigate('School',{user:'Tinh'})}
            /> */}
        </View>
    )
  }
}
