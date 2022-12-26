import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  ScrollView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableWithoutFeedback } from "react-native-web";

export default function Fundwallet() {
  const [phonenumber, Set_phonenmuber] = useState("");
  const [amount, set_amount] = useState("");
  return (
    <SafeAreaView style={styles.Safeareaview}>
      <ScrollView>
        <View style={styles.welcome}>
          <Text>Reseller Ewallet</Text>
        </View>

        <View>
          <Text style={styles.Buttons}>Enter Amount</Text>

          <TextInput
            style={styles.phoneinput}
            placeholder=" Enter Amount"
            onChangeText={(Value) => set_amount(Value)}
          />

          <Text style={styles.Buttons}> Enter PhonesNumber </Text>
          <TextInput
            style={styles.phoneinput}
            placeholder=" Enter PhoneNumber"
            onChangeText={(Value) => set_Phonenumber(Value)}
          />
        </View>

        <Button />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    height: 80,
    color: "white",
    PaddingTop: 38,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "white" },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "purple",
    color: "purple",
  },
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    borderColor: "purple",
    color: "white",
  },

  Buttons: {
    PaddingTop: 38,
    Top: 20,
    backgroundColor: "purple",
    alignItems: "center",
    Color: "#fff",
    width: 96,
    height: 98,
    fontWeight: "bold",
  },

  footer: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    Color: "white",
    color: "#20232a",
    top: 270,
    height: 658,
  },
  image: {
    width: 66,
    height: 58,
  },
});
