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
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [blood_grp, setBlood_grp] = useState("");
    const [weight, setWeight] = useState("");
  
    const HandleRegister = () => {
        const data = {
            address: address,
            age: age,
            blood_grp: blood_grp,
            email_id: email,
            lname: lname,
            mob_no: number,
            name: fname,
            weight: weight,
            password: password,
            medical_history:"",
            id:1
        }
        console.log(data)
        fetch('http://192.168.43.119:8000/register_request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    setIsVisible2(true);
                }
                return response.json();
            })
            .then(data => {
                if (data == "success") {
                    navigation.navigate("Login")
                }
                else if(data == "User already exist"){
                    setIsVisible1(true);
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <SafeAreaView SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ margin: 10, marginTop: 70, borderWidth: 0, borderRadius: 15, borderColor: '#172E68', padding: 10 }}>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="First Name"
                            placeholderTextColor="black"
                            onChangeText={(Fname) => setFname(Fname)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Last Name"
                            placeholderTextColor="black"
                            onChangeText={(Lname) => setLname(Lname)}
                        />
                    </View>


                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            placeholderTextColor="black"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Age"
                            placeholderTextColor="black"
                            onChangeText={(age) => setAge(age)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Address"
                            placeholderTextColor="black"
                            onChangeText={(addr) => setAddress(addr)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Phone Number"
                            placeholderTextColor="black"
                            onChangeText={(num) => setNumber(num)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Weight"
                            placeholderTextColor="black" s
                            onChangeText={(weight) => setWeight(weight)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Blood Group"
                            placeholderTextColor="black"
                            onChangeText={(BloodGrp) => setBlood_grp(BloodGrp)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Set Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>

                    <TouchableOpacity style={styles.loginBtn} onPress={HandleRegister}>
                        <Text style={styles.loginText}>Register</Text>
                    </TouchableOpacity>
                    {isVisible1 && <Text style={{color:"red"}}>User already exists</Text>}
                    {isVisible2 && <Text style={{color:"red"}}>Please fill all details</Text>}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 9,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        height: "100%"
    },
    tinyLogo: {
        marginLeft: -20,
        height: 41,
        marginBottom: 0,
        width: 140,
        marginTop: 0,
    },
    heading: {
        marginBottom: 5,
        color: "#172E68",
        fontSize: 30,
        fontWeight: "bold",
        padding: 10
    },
    inputView: {
        borderRadius: 15,
        borderColor: "#172E68",
        borderWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 0
    },
    forgot_button: {
        height: 30,
        marginBottom: 30
    },
    loginBtn: {
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#172E68",
        marginBottom: 30
    },
    loginText: {
        marginBottom: 5,
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },

});