import React from 'react';
import { RefreshControl, 
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TouchableOpacity, 
    Image,
    ImageBackground, 
   } from 'react-native';
import Profile from './Profile';



const Dashboard = ({navigation}) => {
  

  return (
    <SafeAreaView>
      <ScrollView>


      
        
       <View >


{/**View 1 */}
        <View style={styles.view1}>
              
              <View style={{paddingLeft:10, marginTop:10, flexDirection:'row', justifyContent:"space-between", paddingRight:10}}>
              <Image source={require('../assets/menu-bar.png')} 
              style={{width:30,height:30}}/>
              
              
              
              
              <View style={{
                width:150,
                height:150,
                marginBottom:30,
                marginLeft:10,
                marginRight:20}}>
              <Image source={require('../assets/trade-icon.png')} 
              style={{width:'100%',height:'100%'}}/>
              </View>

              <Image source={require('../assets/bell.png')} 
              style={{width:25,height:25, paddingRight:20, }}/>

              </View>
        </View>

        <View >
        <Image source={require('../assets/three-dots.png')} 
              style={{width:40,height:25,marginLeft:160, marginTop:10}}/>
        </View>


        {/**2nd view */}
         

         

         <View style={{
          marginTop:-5,
          marginBottom:30,
          flexDirection:'row',
          justifyContent:"space-between",
          padding:40}}>
            <View>
            <TouchableOpacity 
            style={{
              width:60,
              height:60,
              borderWidth:1,
              borderRadius:15,
              borderColor:'#d2691e',
              backgroundColor:"#ffa07a",
              padding:10,
              marginLeft:-10}}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:32}}>01</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-30, fontSize:9}}>Total Requirements</Text>
            </View>



            
            <View>

            <TouchableOpacity 
            style={{
              width:60,
              height:60,
              borderWidth:1,
              borderRadius:15,
              borderColor:'#d2691e',
              backgroundColor:"#ffa07a",
              padding:10,
              marginLeft:1}}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-2, fontSize:32}}>03</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:'bold', marginLeft:-1, fontSize:9}}>Total Requests</Text>

            </View>


              <View>
            <TouchableOpacity 
             style={{
              width:60,
              height:60,
              borderWidth:1,
              borderRadius:15,
              borderColor:'#d2691e',
              backgroundColor:"#ffa07a",
              padding:10,
              marginLeft:-1}}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:32}}>00</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-10, fontSize:9}}>Pending Requests</Text>
            </View>

            <View>
            <TouchableOpacity  
             style={{
              width:60,
              height:60,
              borderWidth:1,
              borderRadius:15,
              borderColor:'#d2691e',
              backgroundColor:"#ffa07a",
              padding:10,
              marginLeft:-6}}>
              <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1, fontSize:32}}>01</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-10 ,marginRight:-20, fontSize:9}}>Approved Request</Text>
            </View>

      </View>


        </View>

       

        

       
{/*footer uper view3 */}
<View 
//style={styles.view3}
>



<View style={styles.container}>
    <ImageBackground source={require('../assets/Background.png')} resizeMode="cover" style={styles.image} 
    imageStyle= {{opacity:0.5,borderRadius:20,}}>

      
   
    {/**View 3.1 */}

    <View style={{
        marginTop:7,
        height:30,
        width:50,
        marginLeft:166,

            }} >
    <Image source={require('../assets/down-arrow.png')} 
              style={{width:'60%',height:'100%'}}/>


    </View>

    {/**Components */}
            <View 
            style={{
              flexDirection:'row',
              justifyContent:"space-between",
              padding:20,
              flex:2,
              //backgroundColor:"#dcdcdc",
              marginTop:10,
            }}>

<View >
            <TouchableOpacity 
            onPress={()=>navigation.navigate("OverView")} 
            style={{
                width:60,
                height:60,
                borderRadius:15,
                borderWidth:1,
                borderColor:'#778899',
                backgroundColor:"#fffff0",
                padding:10,
                marginLeft:20}}>
              <Image  source={require('../assets/analysis.png')} 
              
              style={{width:'100%',height:'100%'}} 
              />
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:20, }} >OverView</Text>
            </View>



                
            <View>
            <TouchableOpacity  
            onPress={()=>navigation.navigate("Requirements")} 
            style={{
                width:60,
                height:60,
                borderRadius:15,
                borderWidth:1,
                borderColor:'#778899',
                backgroundColor:"#fffff0",
                padding:10,
                marginLeft:20}}>
              <Image source={require('../assets/Requirement.png')} 
              style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:10,}}>Requirement</Text>
            </View>



            
            <View>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Request")}
            style={{
                width:60,
                height:60,
                borderRadius:15,
                borderWidth:1,
                borderWidth:1,
                borderColor:'#778899',
                backgroundColor:"#fffff0",
                padding:10,
                marginRight:27}}>
              <Image source={require('../assets/Request.png')} style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:'bold', marginRight:22,}}>Request</Text>

            </View>


              
            </View>

{/**testing view */}
{/********another view  */}



<View 
            style={{
              flexDirection:'row',
              justifyContent:"space-between",
              padding:20,
              flex:2,
              //backgroundColor:"#dcdcdc",
              marginTop:-10,
            }}>

<View>
            <TouchableOpacity  
            onPress={()=>navigation.navigate("Tracking")} 
            style={{
                width:60,
                height:60,
                borderRadius:15,
                borderWidth:1,
                borderColor:'#778899',
                backgroundColor:"#fffff0",
                padding:10,
                marginLeft:20}}>
              <Image source={require('../assets/tracking.png')} 
              style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:10,}}>Tracking</Text>
            </View>



                
            <View>
            <TouchableOpacity  
            onPress={()=>navigation.navigate("E-Wallet")} 
            style={{
                width:60,
                height:60,
                borderRadius:15,
                borderWidth:1,
                borderColor:'#778899',
                backgroundColor:"#fffff0",
                padding:10,
                marginLeft:20}}>
              <Image source={require('../assets/wallet.png')} 
              style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:10,}}>E-Wallet</Text>
            </View>



            
            <View>

            <TouchableOpacity 
            style={{
                width:60,
                height:60,
                borderRadius:15,
                borderWidth:1,
                borderWidth:1,
                borderColor:'#778899',
                backgroundColor:"#fffff0",
                padding:10,
                marginRight:27}}>
              <Image source={require('../assets/change.png')} 
              style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:'bold', marginRight:22,}}>Refrences</Text>

            </View>
            </View>

            </ImageBackground>
  </View>
          {/*main view*/}  
      </View>
      

      

{/* footer*/}
{/**my code footer*/}


<View style={styles.footer}>

            <View>
            <TouchableOpacity 
            style={{width:60,height:60,padding:10}}>
              <Image source={require('../assets/home.png')} 
              style={{width:'70%',height:'70%'}}/>
            </TouchableOpacity>
            </View>


            
            <View>
            <TouchableOpacity 
             style={{width:60,height:60,padding:10,marginLeft:1}}>
              <Image source={require('../assets/search.png')} style={{width:'70%',height:'70%'}}/>
            </TouchableOpacity>
            </View>



            <View >
            <TouchableOpacity  
            style={{
                width:60,
                height:60,
                borderRadius:15,
                backgroundColor:"#F2F3F5",
                padding:10,
                marginLeft:-5,
               

                shadowColor: "#ffa07a",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                elevation: 24,
                
                }}>
              <Image source={require('../assets/qr-code-scan.png')} 
              style={{width:'90%',height:'90%'}}/>
            </TouchableOpacity>
            </View>



              <View>
            <TouchableOpacity  
            onPress={() => Chat()}
             style={{width:60,height:60,padding:10,marginLeft:-1}}>
              <Image source={require('../assets/comment.png')} style={{width:'70%',height:'70%'}}/>
            </TouchableOpacity>
            
            </View>

            <View>
            <TouchableOpacity  
            onPress={()=>navigation.navigate("Profile")}
            
            style={{width:60,height:60,padding:10,marginLeft:-5}}>
              <Image source={require('../assets/user.png')} 
              
              style={{width:'70%',height:'70%'}}/>
            </TouchableOpacity>
            
            </View>

      </View>

    
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  
  view1: {
    padding:2, 
   height:170, 
   width:350,
   borderRadius:20,
   marginTop:5,
   marginLeft:5,
   backgroundColor: 'rgba(230,210,220,0.5)',
   
  },

  view2:{
    backgroundColor: "#90ee90",
    flex: 2,

  },

  view3:{
    flex:2,
    //backgroundColor: "#f5f5dc",
     padding:2, 
   // backgroundColor:"#DDFFFF", 
    backgroundColor:"#90ee90",
    height:300, 
    borderRadius:10,
    //backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop:-20,
    
    

    
    

  },

  
  footer:{
    
    flexDirection:'row',
    justifyContent:"space-between",
    padding:2, 
    //backgroundColor:"#dcdcdc", 
    backgroundColor:"#EFEFEF",
    
    height:50, 
    borderRadius:10,
    
///////////
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,

  },

  //////////////

  


  //////////////////
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

  }

  
});

export default Dashboard;