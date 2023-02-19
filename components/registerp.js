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


export default function registerp({navigation}) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    return (

        <SafeAreaView SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.registerp}>

            <StatusBar style="auto" />

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
                <Text style={styles.loginText} onPress={()=>navigation.navigate("Login")}>Register</Text>
            </TouchableOpacity>
        </View>
</ScrollView>
</SafeAreaView>


    );
}


const styles = StyleSheet.create({
    registerp:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    container: {
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
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
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#0CAFFF",
    },
    loginText: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold'
    },
   
});