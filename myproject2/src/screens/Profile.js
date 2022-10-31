import React, { useState } from 'react';
import { Button, 
    Text, 
    View, 
    StyleSheet, 
    Dimensions, 
    FlatList, 
    TouchableOpacity, 
    SafeAreaView, 
    TextInput, 
    Image} from 'react-native';


import 'react-native-gesture-handler';


import {ScrollView} from 'react-native-gesture-handler';



const Profile =({navigation}) =>{
    return (

        <SafeAreaView>

         {/* my code splash screen */}   
        <Image
                style={{
                    width: 300, 
                    height: 300, 
                    alignSelf: 'center',
                    marginTop:200
                }}
                source={require('../assets/trade-icon.png')}
              />
        
        <View>
        <Image
                style={{width: 40, 
                    height: 40, 
                    alignSelf: 'center',
                    marginTop:100,
                    marginRight:150,
                 }}
                source={require('../assets/right-arrow.png')}
              />
              <Text style={{ 
                    alignSelf: 'center',
                    marginTop:-30,
                    marginRight:-35,
                    marginBottom:10,
                    fontSize:15,
                 }} onPress={()=>navigation.navigate("Dashboard")}>GET STARTED!!</Text>
        </View>

              
              
        </SafeAreaView>
    
    );
};


export default Profile;

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10,
        justifyContent: 'center'
    },
    ListTab:{
          
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom: 20
    },
    btnTab:{
        width:Dimensions.get('window').width/3.5,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor: '#EBEBEB',
        padding:10,
        justifyContent: 'center'
    },
    textTab:{
        fontSize:16
    },
    btnTabActive:
    {
        backgroundColor: '#E6838D'
    }
})