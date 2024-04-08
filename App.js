/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/Screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import New from './src/Screen/New';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
 


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
 

  return (
       <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="LoginScreen" component={LoginScreen} />
         <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
       </NavigationContainer>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
 
});
export default App;
