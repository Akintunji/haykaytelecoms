

import React,{ useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Picker,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableWithoutFeedback } from 'react-native-web';





export default function Vtu() {

    const [phonenumber,Set_phonenmuber]=useState('');
  const [amount,set_amount]=useState('');
  return (
<SafeAreaView style={styles.Safeareaview}>
 <ScrollView>
 <View style={{marginTop:100,marginLeft:40, }}/>

 <View  style={{ height: 50, width: 100,alignItems:'center',}}>





<Text  style={styles.Text}>SELECT NETWORK</Text>
<Picker
 style={{ height: 50, width: 100 }}
 onValueChange={(itemValue) =>
   setplan_id(itemValue )
 }>

<Picker.Item label = "Mtn" value = "1" />
<Picker.Item label = "GLO" value = "3" />
<Picker.Item label = "AIRTEL" value = "2" />
<Picker.Item label = "9MOBILE" value = "4" />

</Picker>
<TextInput
        style={styles.phoneinput}
        placeholder=" Enter Amount"
        onChangeText={(Value) =>
    set_amount(Value )
  }/> 




 <Text   style={styles.Text}> Enter PhoneNumber </Text>
 <TextInput
        style={styles.phoneinput}
        placeholder=" Enter PhoneNumber"
        onChangeText={(Value) =>
    set_Phonenumber(Value )
  }/> 

<Button title='buy'/>
 

</View>

     

</ScrollView>
  </SafeAreaView>

  );
}
const styles = StyleSheet.create({
header: {
     flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
fontSize:20,
fontWeight:'bold',
    height:80, 
color: 'white',
PaddingTop:38,
  },
  Safeareaview: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    
      color:'#000080',
   
  },
  
title:{fontSize:20,
fontWeight:'bold',
color: 'white',},
 content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
    
  },  
container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'white',
   
  },

Text:{
   PaddingTop:38,Top:20,
 
    alignItems: 'center',
color: 'blue',

fontWeight:'bold',
  },


footer: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
 Color: 'white',
 color: "#20232a",
 top: 270,
height: 658,
  },
 image: {
    width: 66,
    height: 58,
  },

});
