import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../navigation/types'

type props = NativeStackScreenProps<RootStackParamList,'About'>;
const AboutScreen:React.FC<props> = ({navigation}) => {

  return (
    <View>
      <Text>About</Text>
      <Button title='Profile' onPress={()=> navigation.navigate('Profile',{name:'Ryan'})} />
    </View>
  )
}

export default AboutScreen
