import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

export default function Data() {
  return (
<SafeAreaView style={styles.Safeareaview}>

  <ScrollView>

  <View style={{marginTop:100,marginLeft:40, }}/>











 <Text  style={{color:'blue',}}>SELECT DISTRIBUTOR</Text>
 <Picker onValueChange={(Value) =>
set_discotype(Value )}>

<Picker.Item label = "ABUJA" value = "11" />
 <Picker.Item label = "KANO" value = "15" />
 <Picker.Item label = "PORTHARCOUT" value = "18" />
 <Picker.Item label = "IBADAN" value = "14" />
 
 </Picker>


<View>
<Text     style={{color:'blue',}}>SELECT METER TYPE</Text>

<Picker onValueChange={(Value) =>
  set_meter_type(Value )}>
<Picker.Item label = "PREPAID " value = "Prepaid" />
<Picker.Item label = "POSTPAID" value = "Postpaid" />
</Picker>
<Text  style={{color:'blue',}}> Enter METER NUMBER </Text>
 <TextInput
        style={styles.phoneinput}
        placeholder=" Enter Meter-Number"
        onChangeText={(Value) =>
          set_phonenumber(Value )}
/>  






<Button title='Buy'/>
 
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
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
   
  },

Buttons:{
   PaddingTop:38,
    alignItems: 'center',
Color: '#fff',
 width: 96,

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
