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

export default function profile() {
    return (
        <View>
            <View style={{ flex: 2, marginTop: 40 }}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/logo.png')} />
      </View>
            <View style={styles.container}>
                
                <Image source={require('../assets/img.png')} style={styles.userImage} />
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:290,
        flex: 9,
        alignItems: "center",
        justifyContent: "center",
      },

    tinyLogo: {
        height: 41,
        marginBottom: 0,
        width: 140,
        marginTop: 0,
        marginLeft: 0
      },
    loginText: {
        marginBottom: 5,
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginBtn: {
        marginLeft: 20,
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        backgroundColor: "#0CAFFF",
    },
    loginBtn1: {
        marginLeft: 20,
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#0CAFFF",
    },
    heading1: {
        // marginBottom:20,
        color: "#172E68",
        fontSize: 30,
        fontWeight: 'bold',  
        marginTop: 10,
    },
    heading2: {
        // marginBottom:20,
        color: "#172E68",
        fontSize: 20,
        // fontWeight: 'bold',
    
        marginTop: 10,

    },
    userImage: {
        borderRadius: 60,
        height: 120,
        marginBottom: 10,
        width: 120,
        marginTop: 2,
        // alignSelf:'center'
    },
})