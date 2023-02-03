import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";

export default function login(){

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return(

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
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
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
    heading:{
        marginBottom:20,
        color:"#0CAFFF",
        fontSize:30,
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
    loginText:{
        marginBottom:8,
        color:"black",
        fontSize:20,
        fontWeight: 'bold'
    }
  });