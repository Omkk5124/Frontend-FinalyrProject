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

export default function profile(){
    return(
      <View>
         <Text style={styles.heading}>Doctor Information</Text>
        <Image source = {require('../assets/img.png')} style={styles.userImage}/>
        <Text style={styles.heading1}>Dr. ABC</Text>
        <Text style={styles.heading2}>Cardiologists</Text>
        <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn1}>
                <Text style={styles.loginText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn1}>
                <Text style={styles.loginText}>Call</Text>
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        marginTop:-60,
        marginBottom:20,
        color:"#0CAFFF",
        fontSize:30,
        fontWeight: 'bold'
    
    },
    loginText: {
        marginBottom: 5,
        color: "black",
        fontSize: 20,
        fontWeight: 'bold'
    },  
    loginBtn: {
        marginLeft:20,
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        backgroundColor: "#0CAFFF",
    },
    loginBtn1: {
        marginLeft:20,
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#0CAFFF",
    },
    heading1:{
      
        // marginBottom:20,
        color:"#0CAFFF",
        fontSize:30,
        fontWeight: 'bold',
        marginLeft:60,
        marginTop:10,
    
    },
    heading2:{
      
        // marginBottom:20,
        color:"#0CAFFF",
        fontSize:20,
        // fontWeight: 'bold',
        marginLeft:60,
        marginTop:10,
    
    },
    userImage: {
        borderRadius: 60,
        height: 120,
        marginBottom: 10,
        width: 120,
        marginTop:2,
        marginLeft:60
      },
})