import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import {connect} from 'react-redux';
import Swipeout from 'react-native-swipeout';



class Word extends Component{
    render(){
        const arr=this.props;
        const {en,vn,memorized, isShow}=this.props.myWord;
        const textDecorationLine=memorized ? 'line-through':'none';
        const meaning=isShow ? vn : '';
        const show=isShow ? 'Un Show': 'Show';

        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {

            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowkey: this.props.myWord.id });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowkey;
                        Alert.alert(
                            'Alert',
                            'Are you sure?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancle' },
                                {
                                    text: 'Yes', onPress: () => {
                                        // arr.splice(this.props.item, 1);
                                        // //Refresh flatlist
                                        // this.props.parentFlatlist.refreshFlatlist(deletingRow);
                                    }
                                }
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }

            ],
            rowId: this.props.item,
            sectionId: 1
        };
        return(
            <Swipeout {...swipeSettings} style={{backgroundColor:'#1abc9a'}}>
            <View style={styles.container}>
                <View style={{padding:5}}>
                    <Text style={{textDecorationLine:textDecorationLine}}>
                        {en}
                    </Text>
                    <Text>
                    {meaning}
                    </Text>
                </View>
                <TouchableOpacity 
                onPress={()=>this.props.dispatch({type: 'SHOW', id:this.props.myWord.id})}
                style={styles.buttonText}>
                    <Text>{show}</Text>
                </TouchableOpacity>
            </View> 
              </Swipeout>
        )
    }
}
export default connect()(Word);
const styles=StyleSheet.create
({
    container:{
        flex:1,flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#1abc1f',
        borderWidth: 1,
        padding:5,
        margin:5
    },
    text:{
        
    },
    buttonText:{
        backgroundColor:'yellow',
        borderWidth:1,
        padding:5
    },

});


