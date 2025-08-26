import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen:React.FC<Props> = ({navigation,route}) => {
  return (
    <View>
    
      <Button title='Go to about' onPress={()=> navigation.navigate('About')} />
    </View>
  )
}

export default HomeScreen
