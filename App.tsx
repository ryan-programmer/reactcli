/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

function App() {

  useEffect(()=>{
    setTimeout(()=>{
    SplashScreen.hide()

    },2000)
  },[]);
  return (
   <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
