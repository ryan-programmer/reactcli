import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { TYPOGRAPHY } from '../constants/typography';
   type Variant = keyof typeof TYPOGRAPHY;

    interface AppTextProps extends TextProps{
        variant?: Variant;
        style?: StyleProp<TextStyle>;
        children: React.ReactNode;
    }
const Apptext:React.FC<AppTextProps> = ({variant = "body",style,children,...props}) => {
 
  return (
    <Text style={[TYPOGRAPHY[variant]   as TextStyle,style]} {...props}>
      {children}
    </Text>
  )
}

export default Apptext
