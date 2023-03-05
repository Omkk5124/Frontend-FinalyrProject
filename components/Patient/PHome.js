import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import ionicon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

export default function Home({navigation}) {
    return (
        <View style={{ flex: 1 ,margin:"1%"}}>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={{}}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 9,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <Fontisto.Button
                                name="doctor"
                                type="FontAwesome"
                                style={{
                                    backgroundColor: '#42c1fc',
                                }}
                                size={117}
                                color='#fff'
                                onPress={() => navigation.navigate('ListDoc')} />
                        </View>
                        <View>
                            <Text style={styles.TextStyle}> Doctor List</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={{}}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 9,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Entypo.Button
                                name="user"
                                type="Entypo"
                                style={{
                                    backgroundColor: '#faa',
                                }}
                                size={110}
                                color='#fff'
                                onPress={() => navigation.navigate('Profilep')} />
                        </View>
                        <View>

                            <Text style={styles.TextStyle} >User Profile</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={{}}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 9,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <Icon.Button
                                name="gears"
                                type="FontAwesome"
                                style={{
                                    backgroundColor: '#fff',
                                }}
                                size={110}
                                color='#555'
                                onPress={() => navigation.navigate('Symptoms')} />
                        </View>
                        <View>

                            <Text style={styles.TextStyle}>Predict Disease</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={{}}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 9,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <Icon5.Button
                                name="upload"
                                type="FontAwesome5"
                                style={{
                                    backgroundColor: '#fff',
                                }}
                                size={97}
                                color='#666'
                                onPress={() => navigation.navigate('UploadDocp')} />
                        </View>
                        <View>

                            <Text style={styles.TextStyle}>Upload Document</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={{}}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 9,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <Entypo.Button
                                name="help-with-circle"
                                type="FontAwesome"
                                style={{
                                    backgroundColor: '#42c1fc',
                                }}
                                size={110}
                                color='#fff'
                                onPress={() => navigation.navigate('Help')} />
                        </View>
                        <View>

                            <Text style={styles.TextStyle}>Help</Text>
                        </View>
                    </View>
                </TouchableOpacity><TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={{}}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 9,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <ionicon.Button
                                name="log-out-outline"
                                type="ionicon"
                                style={{
                                    backgroundColor: '#f55',
                                }}
                                size={110}
                                color='#fff'
                                onPress={() => {
                                    navigation.navigate('Login')
                                    }} />
                        </View>
                        <View>
                            <Text style={styles.TextStyle}> log out</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>



    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 4,

    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',

    },
    tinyLogo: {
        height: 41,
        marginBottom: 0,
        width: 140,
        marginTop: 0,
        marginLeft: 0
    },
    SubmitButtonStyle: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#d8f3dc',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 160
    },

    TextStyle: {
        color: '#172E68',
        textAlign: 'center',
        fontSize: 18
    }
});



