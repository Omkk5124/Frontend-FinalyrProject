import React, { useEffect, useState } from "react";
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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function patient_profile({ navigation }) {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const getUsername = async () => {
            try {
                const username = await AsyncStorage.getItem('username');
                setEmail(username);
            } catch (error) {
                console.log('Error retrieving username:', error);
            }
        };
        getUsername();
    },[]);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img.png')} style={styles.userImage} />
            <Text style={styles.heading1}>{email}</Text>
            <Text style={styles.heading2}>Katraj,Pune</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: 'flex',
        alignItems: "center",
        // justifyContent: "center",
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
    },
})