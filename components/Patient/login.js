import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {host} from './constants'


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

export default function login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const saveUsername = async (username) => {
    try {
      await AsyncStorage.setItem('username', username);
    } catch (error) {
      console.log('Error saving username:', error);
    }
  };

  const handleLogin = () => {
    console.log(`http://${host}:8000/login_request`)
    fetch(`http://${host}:8000/login_request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_id: email,
        password: password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful login
        if (data == "Invalid") {
          setIsVisible(true);
          return
        }
        else if (data == "Invalid credentials") {
          setIsVisible(true);
          return
        }
        saveUsername(email);
        navigation.replace("PHome")
      })
      .catch(error => console.log(error));
  };

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style={styles.heading}>LOGIN</Text>
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {isVisible && <Text style={{ color: "red" }}>Invalid credential</Text>}
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}
          onPress={handleLogin}
        >LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerBtn} onPress={() => navigation.navigate("Registerp")}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    marginBottom: 20,
    color: "#0CAFFF",
    fontSize: 30,
    fontWeight: 'bold'

  },
  inputView: {
    backgroundColor: "#0CAFFF",
    borderRadius: 30,

    width: 200,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#0CAFFF",
  },
  loginText: {
    marginBottom: 8,
    color: "black",
    fontSize: 20,
    fontWeight: 'bold'
  },
  registerBtn: {
    height: 30,
    marginTop: 10,
    color: "blue",

  }
});