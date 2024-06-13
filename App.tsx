import React from "react";
import Homepage from "./Homepage";
import Quouts from "./Quouts";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Singlequouts from "./Singlequouts";

const Stack = createNativeStackNavigator();
function App(){
  return(
    <>

   <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Homepage} options={{headerShown:false}}/>
            <Stack.Screen name="Details" component={Quouts} options={{headerShown:false}}/>
            <Stack.Screen name="single" component={Singlequouts} options={{headerShown:false}}/>
            
        </Stack.Navigator>
  </NavigationContainer>
    </>
  )
}
export default App;

