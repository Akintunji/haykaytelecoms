import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  Alert,
  Image,
  Keyboard,
  pressable,
} from "react-native";
import { Dimensions } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Vtu from "../wallet/vtu";
import Cable from "../wallet/cable";
import Data from "../wallet/data";
import Electricity from "../wallet/electricity";
import Fundwallet from "../wallet/Fundwallet";

function Child_dashboard({ navigation }) {
  const [balance, setbalance] = useState("");
  const [token, settoken] = useState("");
  const [email, setemail] = useState("");

  async function retrieveUserSession() {
    try {
      const session = await AsyncStorage.getItem("user_session");

      if (session !== undefined) {
        const session_items = JSON.parse(session);
        setemail(session_items.email);
        settoken(session_items.token);
        setbalance(session_items.balance);
      } else {
        console.log("Empty values");
      }
    } catch (error) {}
  }

  useEffect(() => {
    retrieveUserSession();
  });

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.Text}>Your Wallet balance is</Text>
        <Text>Welcome {email}</Text>
      </View>
      <View style={{ marginTop: 50 }} />

      <View style={styles.pcontainer}>
        <View style={styles.container}>
          <View>
            <Image style={styles.image} source={require("../assets/vtu.jpg")} />
            <TouchableOpacity onPress={() => navigation.navigate("Vtu")}>
              {" "}
              <Text style={styles.Text}>Buy Vtu</Text>{" "}
            </TouchableOpacity>
          </View>

          <View>
            <Image
              style={styles.image}
              source={require("../assets/data.jpg")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Data")}>
              {" "}
              <Text style={styles.Text}>Buy Data </Text>
            </TouchableOpacity>{" "}
          </View>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/home2.jpg")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("transfer")}>
              {" "}
              <Text style={styles.Text}>Transfer</Text>{" "}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/cable.jpg")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Cable")}>
              <Text style={styles.Text}> Cable TV</Text>
            </TouchableOpacity>{" "}
          </View>

          <View>
            <Image
              style={styles.image}
              source={require("../assets/electricity.jpg")}
            />{" "}
            <TouchableOpacity
              onPress={() => navigation.navigate("Electricity")}
            >
              <Text style={styles.Text}>Buy Electricity </Text>
            </TouchableOpacity>{" "}
          </View>
          <View>
            <Image style={styles.image} source={require("../assets/vtu.jpg")} />
            <TouchableOpacity onPress={() => navigation.navigate("vtu")}>
              {" "}
              <Text style={styles.Text}>Fund Wallet</Text>{" "}
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  Text: { color: "blue" },

  pcontainer: {
    flex: 1,
    justifyContent: "center",
    borderColor: "white",
    color: "white",
  },

  container: {
    flex: 1,
    top: 170,
    justifyContent: "center",
    borderColor: "white",
    color: "white",
    flexDirection: "row",
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
    height: 88,
    Top: 20,
  },
});
const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer independent="true">
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            fontWeight: "bold",
            backgroundColor: "#000080",
            color: "gold",
            showIcon: false,
          },
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: { marginVertical: 15 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Child_dashboard}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Vtu"
          component={Vtu}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Data"
          component={Data}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cable"
          component={Cable}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Electricity"
          component={Electricity}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="transfer"
          component={Transfer}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
