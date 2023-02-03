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
    ScrollView,
    SafeAreaView
} from "react-native";


export default function registerp() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    return (

        <SafeAreaView SafeAreaView style={styles.container}>
        <ScrollView>
        <View>

            <StatusBar style="auto" />
            <Text style={styles.heading}>Patient Registration</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputView}>

                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="black"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Age"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Address"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone Number"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    
                />
            </View>
           
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    
                />
            </View>
           


            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
        </View>
</ScrollView>
</SafeAreaView>


    );
}


const styles = StyleSheet.create({
  
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: 'white',
      },
    heading: {
        marginBottom: 20,
        color: "#0CAFFF",
        fontSize: 30,
        fontWeight: 'bold'

    },
    inputView: {

        borderRadius: 20,
        borderColor:"black",
        borderWidth:1,
        width: 250,
        height: 45,
        marginBottom: 20,

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
        marginLeft:20,
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#0CAFFF",
    },
    loginText: {
        marginBottom: 5,
        color: "black",
        fontSize: 20,
        fontWeight: 'bold'
    },
   
});