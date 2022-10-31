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

{/**Background */}
{/**main View 1 */}

            <View>

            <View style={styles.container}>
              <ImageBackground 
              source={require('../assets/Background.png')} 
              resizeMode="cover" 
              style={styles.image} 
              imageStyle= {{opacity:0.5}}>

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
              //textAlign:"center",
              fontWeight:"bold", 
              marginLeft:10, 
              marginRight:140,
              fontSize:17, 
              marginTop:15}} >
                Tracking</Text>
        </View>

{/**View1 */}

        <View style={styles.View1}>

              <View 
              style={{
              width:320,
              height:40,
              borderRadius:10,
              borderWidth:1,
              borderColor:'#F2F3F5',
              backgroundColor:"#F2F3F5",
              padding:10,
              marginLeft:-20}}>
                
            <TouchableOpacity >
              <Text style={{textAlign:"center",fontWeight:"bold", fontSize:15}}>Search</Text>
              <TouchableOpacity 
             style={{width:50,height:50,padding:10,marginLeft:230, marginTop:-30 }}>
              <Image source={require('../assets/edit.png')}
               style={{width:'70%',height:'70%'}}/>
            </TouchableOpacity>
              
              <TouchableOpacity 
             style={{width:50,height:50,padding:10,marginLeft:260, marginTop:-50 }}>
              <Image source={require('../assets/search.png')}
               style={{width:'60%',height:'60%'}}/>
            </TouchableOpacity>

            </TouchableOpacity>
            
            </View>

            
        </View>


        <View style={{flexDirection:'row',marginBottom:20}}>
            <TouchableOpacity  
             style={{
              width:100,
              height:40,
              borderWidth:1,
              borderRadius:15,
              borderColor:'#F2F3F5',
              backgroundColor:"#ffa07a",
              padding:10,
              marginLeft:50,
              marginBottom:20,
              }}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:15}}>USING</Text>
            </TouchableOpacity>



            
            <TouchableOpacity  
             style={{
              width:100,
              height:40,
              borderWidth:1,
              borderRadius:15,
              borderColor:'#F2F3F5',
              backgroundColor:"#9acd32",
              padding:10,
              marginLeft:50,
              marginBottom:20,
              }}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:15}}>SUPPLYING</Text>
            </TouchableOpacity>
            
            </View>

            


            

            </ImageBackground>
  </View>


        </View>   
     

{/**View 2 */}


        <View style={{
              width:'95%',
              height:270,
              //borderWidth:1,
              borderRadius:15,
              //borderColor:'#00ffff',
              backgroundColor:"#EBEBEB",
              padding:10,
              marginLeft:10,
              marginTop:10,
              borderColor:'#48d1cc', 
              borderBottomWidth:2,
              }}>

                <View 
                style={{
                    flexDirection:'row',
                    justifyContent:"space-between",}}>
                <Text style={{fontWeight:"bold", fontSize:15,  color:'#ff0000'}}>In Process</Text>
                
             
            
                </View>
{/*profile*/}
                <View style={{marginTop:15, 
                flexDirection:'row',
              justifyContent:"space-between",
              borderColor:'#48d1cc', 
              borderBottomWidth:2,
              }}>

                <Text 
                style={{
                    textAlign:"center",
                    fontWeight:"bold", 
                    marginLeft:10,
                    marginTop:10, 
                    fontSize:15}}>Shipment No:09w0w0</Text>



                    <View style={{
                        width:80,
                        height:50,
                        marginRight:27,
                        marginTop:10}}>

           
              <Image source={require('../assets/container-truck.png')} 
              style={{width:'100%',height:'100%',marginTop:-15}}/>
            
             </View>
                
                    
                </View>

                <View 
                style={{
                    textAlign:"center",
                    marginLeft:80, 
                    fontSize:12,
                    marginTop:10,

                    }}>
                <View style={{
                        width:80,
                        height:50,
                        marginRight:27,
                        marginTop:10}}>
                <Image source={require('../assets/container-truck.png')} 
              style={{width:'100%',height:'100%',marginTop:-15}}/>
                </View>
                <Text >Date:18-Oct-22 , Time:6:00pm</Text>
                <Text >Pick-Up:PICT, Karachi - Pakistan</Text>
                <Text >Drop-Off:JEBEL ALI - UAE</Text>
                <Text >Container: 40DC X 2 - Food Grade</Text>
                <Text >Trade Type: Free One Way</Text>
                </View>


              <View 
              style={{
                width:50,
                height:50,
                marginLeft:2,
                marginTop:-60
               }}>
              <Image  source={require('../assets/cargo.png')} 
              style={{width:'90%',height:'90%'}} 
              />
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:10, marginTop:2}}>USING</Text>
            
            </View>


            <View style={{marginTop:20, marginLeft:110}}>
            <TouchableOpacity  
             style={{
              width:100,
              height:30,
              borderWidth:1,
              borderRadius:10,
              borderColor:'#2e8b57',
              backgroundColor:"#9acd32",
              padding:6,
             
              }}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:12}}>View Details</Text>
            </TouchableOpacity>
            </View>

           


            </View>  
 {/**View 3 */}

 <View style={{
              width:'95%',
              height:270,
              //borderWidth:1,
              borderRadius:15,
              //borderColor:'#00ffff',
              backgroundColor:"#EBEBEB",
              padding:10,
              marginLeft:10,
              marginTop:10,
              borderColor:'#48d1cc', 
              borderBottomWidth:2,
              }}>

                <View 
                style={{
                    flexDirection:'row',
                    justifyContent:"space-between",}}>
                <Text style={{fontWeight:"bold", fontSize:15,  color:'#9acd32'}}>OPEN</Text>
                
             
                <TouchableOpacity>
                <Text style={{textAlign:"center", fontSize:15,  color:'#1e90ff', marginRight:20}}>2 Views</Text>
                </TouchableOpacity>
                </View>


                {/*profile*/}
                <View style={{marginTop:15, 
                flexDirection:'row',
              justifyContent:"space-between",
              borderColor:'#48d1cc', 
              borderBottomWidth:2,
              }}>

                <Text 
                style={{
                    textAlign:"center",
                    fontWeight:"bold", 
                    marginLeft:40,
                    marginTop:10, 
                    fontSize:15}}>Sk Shipping Lines</Text>



                    <View style={{
                        width:50,
                        height:50,
                        marginRight:27,
                        marginTop:10}}>

           
              <Image source={require('../assets/man.png')} 
              style={{width:'100%',height:'100%',marginTop:-15}}/>
            
             </View>
                
                    
                </View>



                <View 
                style={{
                    textAlign:"center",
                    marginLeft:80, 
                    fontSize:12,marginTop:10,}}>
                <Text >Date:18-Oct-22 , Time:6:00pm</Text>
                <Text >Pick-Up:PICT, Karachi - Pakistan</Text>
                <Text >Drop-Off:JEBEL ALI - UAE</Text>
                <Text >Container: 40DC X 2 - Food Grade</Text>
                <Text >Trade Type: Free One Way</Text>
                </View>


              <View 
              style={{
                width:50,
                height:50,
                marginLeft:2,
                marginTop:-60
               }}>
              <Image  source={require('../assets/container.png')} 
              style={{width:'90%',height:'90%'}} 
              />
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:9, marginTop:2}}>SUPPLYING</Text>
            
            </View>


            <View style={{marginTop:20, marginLeft:110}}>
            <TouchableOpacity  
             style={{
                width:100,
                height:30,
                borderWidth:1,
                borderRadius:10,
                borderColor:'#2e8b57',
                backgroundColor:"#9acd32",
                padding:6,
             
              }}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:12}}>View Details</Text>
            </TouchableOpacity>
            </View>


           


            </View>  


{/**View 4 */}


<View style={{
              width:'95%',
              height:270,
              //borderWidth:1,
              borderRadius:15,
              //borderColor:'#00ffff',
              backgroundColor:"#EBEBEB",
              padding:10,
              marginLeft:10,
              marginTop:10,
              borderColor:'#48d1cc', 
              borderBottomWidth:2,
              }}>

                <View 
                style={{
                    flexDirection:'row',
                    justifyContent:"space-between",}}>
                <Text style={{fontWeight:"bold", fontSize:15,  color:'#ff0000'}}>CLOSED</Text>
                
             
                <TouchableOpacity>
                <Text style={{textAlign:"center", fontSize:15,  color:'#1e90ff', marginRight:20}}>2 Views</Text>
                </TouchableOpacity>
                </View>


                          {/*profile*/}
                          <View style={{marginTop:15, 
                flexDirection:'row',
              justifyContent:"space-between",
              borderColor:'#48d1cc', 
              borderBottomWidth:2,
              }}>

                <Text 
                style={{
                    textAlign:"center",
                    fontWeight:"bold", 
                    marginLeft:40,
                    marginTop:10, 
                    fontSize:15}}>Sk Shipping Lines</Text>



                    <View style={{
                        width:50,
                        height:50,
                        marginRight:27,
                        marginTop:10}}>

           
              <Image source={require('../assets/man.png')} 
              style={{width:'100%',height:'100%',marginTop:-15}}/>
            
             </View>
                
                    
                </View>

                <View 
                style={{
                    textAlign:"center",
                    marginLeft:80, 
                    fontSize:12,
                    marginTop:10}}>
                <Text >Date:18-Oct-22 , Time:6:00pm</Text>
                <Text >Pick-Up:PICT, Karachi - Pakistan</Text>
                <Text >Drop-Off:JEBEL ALI - UAE</Text>
                <Text >Container: 40DC X 2 - Food Grade</Text>
                <Text >Trade Type: Free One Way</Text>
                </View>


              <View 
              style={{
                width:50,
                height:50,
                marginLeft:2,
                marginTop:-60
               }}>
              <Image  source={require('../assets/cargo.png')} 
              style={{width:'90%',height:'90%'}} 
              />
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:10, marginTop:2}}>USING</Text>
            
            </View>

            <View style={{marginTop:20, marginLeft:110}}>
            <TouchableOpacity  
             style={{
                width:100,
                height:30,
                borderWidth:1,
                borderRadius:10,
                borderColor:'#2e8b57',
                backgroundColor:"#9acd32",
                padding:6,
             
              }}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:12}}>View Details</Text>
            </TouchableOpacity>
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
          padding:40,
         
    },


    /////////////////////



    container: {
      flex: 1,
      borderRadius:20,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      
  
      
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    View:{
      width:100,
      height:40,
  
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight:10,
      
    },
   
    
})