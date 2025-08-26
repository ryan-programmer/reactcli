import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../navigation/types'
type props = NativeStackScreenProps<RootStackParamList,'Profile'>
const ProfileScreen:React.FC<props> = ({navigation,route}) => {
       const { name } = route.params;
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default ProfileScreen
