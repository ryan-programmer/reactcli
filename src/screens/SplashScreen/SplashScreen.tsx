import React from 'react'
import { Image, View } from 'react-native'
import styles from './SplashScreen.style'
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/alpha_logo.png")}
      style={styles.logo} />
    </View>
  )
}

export default SplashScreen

