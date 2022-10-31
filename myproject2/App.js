
 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';

 import Dashboard from './src/screens/Dashboard';
 import Profile from './src/screens/Profile';
 import Chat from './src/screens/Chat';
 import SplashScreen from './src/screens/SplashScreen';
 import OverView from './src/screens/OverView';
 import Requirements from './src/screens/Requirements';
 import Request from './src/screens/Request';
 import Tracking from './src/screens/Tracking';



 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="OverView" component={OverView} />
        <Stack.Screen name="Requirements" component={Requirements} />
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="Tracking" component={Tracking} />
        
        


         

       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
