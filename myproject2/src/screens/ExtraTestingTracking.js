import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
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
    Image, 
    ImageBackground} from 'react-native';


import 'react-native-gesture-handler';


import {ScrollView} from 'react-native-gesture-handler';



const Tracking =({navigation}) =>{
    return (

        <SafeAreaView>

            <ScrollView>


{/**Header  */}  
        <View style={styles.header} >
        <TouchableOpacity 
        onPress={navigation.goBack}
             style={{
              width:50,
              height:50,
              padding:10,
              marginLeft:10, 
              marginTop:10 }}>
              <Image 
              source={require('../assets/backarrow.png')} 
              style={{width:'70%',height:'70%',}}/>
            </TouchableOpacity>


            <Text style={{
              textAlign:"center",
              fontWeight:"bold", 
              marginLeft:-10, 
              marginRight:90,
              fontSize:17, 
              marginTop:15}} >
                Tracking</Text>
        </View>
{/***Main View */}


{/****View 1 */}


<View  style={styles.Track}>


<View>
<TouchableOpacity 

style={styles.TrackComponents}>
  <Image source={require('../assets/containerLoad.png')} 
  style={{width:'90%',height:'90%'}}/>
</TouchableOpacity>
<Text 
style={styles.ComponentsText}>
    Processing</Text>
</View>

<View 
style={styles.StatusLine}>
<Image source={require('../assets/remove.png')} 
  style={{width:'30%',height:'20%', }}/>
</View>



{/******* */}


<View>
<TouchableOpacity 

style={styles.TrackComponents}>
  <Image source={require('../assets/containerLoad.png')} 
  style={{width:'90%',height:'90%'}}/>
</TouchableOpacity>
<Text 
style={styles.ComponentsText}>
    Processing</Text>
</View>

<View 
style={styles.StatusLine}>
<Image source={require('../assets/remove.png')} 
  style={{width:'30%',height:'20%', }}/>
</View>

{/******* */}

<View>
<TouchableOpacity 

style={styles.TrackComponents}>
  <Image source={require('../assets/containerLoad.png')} 
  style={{width:'90%',height:'90%'}}/>
</TouchableOpacity>
<Text 
style={styles.ComponentsText}>
    Processing</Text>
</View>

<View 
style={styles.StatusLine}>
<Image source={require('../assets/remove.png')} 
  style={{width:'30%',height:'20%', }}/>
</View>





</View>

            </ScrollView>
        </SafeAreaView>
    
    );
};


export default Tracking;

const styles = StyleSheet.create({
    View1: {
        marginTop:-30,
          marginBottom:-10,
          flexDirection:'row',
          justifyContent:"space-between",
          padding:90,
         
    },


   

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight:55
    },

    Track:{

        flexDirection:'row',
              justifyContent:"space-between",
              padding:20,
              flex:2,
              //backgroundColor:"#dcdcdc",
              marginTop:10,
             

    },

    TrackComponents:{
    width:50,
    height:50,
    borderRadius:30,
    //borderWidth:1,
    //borderColor:'#778899',
    backgroundColor:"#fffff0",
    padding:10,
    

    },

    ComponentsText:{
    textAlign:"center",
    fontWeight:'bold', 
    

    },

    StatusLine:{

    padding:20,
    flex:2,
    marginTop:10,
   width:40,
   height:40,
    }
   
    
})