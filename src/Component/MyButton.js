import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';


export default function MyButton({ OnChangeButton,iconname, text,  }) {
  const  onPress = (text) =>{
    OnChangeButton(text);
} 


  return (
    <View>
      <Button
        icon={iconname} 
        mode="contained"
        onPress={onPress}>
        {text}
      </Button>
    </View>
  );
}
