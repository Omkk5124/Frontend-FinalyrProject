import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Pressable, TouchableOpacity } from "react-native";
import { symptoms } from "../../assets/symptoms";
import Constants from 'expo-constants';
import { Card, Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {host} from './constants'


export default function Symptoms_selection({ navigation }) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [Disease, setDisease] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(symptoms);
    }, []);


    const handleChange = (id) => {
        let temp = data.map((data_element) => {
            if (id === data_element.id) {
                return { ...data_element, isChecked: !data_element.isChecked };
            }
            return data_element;
        });
        setData(temp);
    };

    let selected = data.filter((data_element) => data_element.isChecked);

    const renderFlatList = (renderData) => {
        return (

            <FlatList
                data={renderData}
                renderItem={({ item }) => (
                    <Card style={{ margin: 5 }}>
                        <View style={styles.card}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                }}>
                                <Pressable onPress={() => handleChange(item.id)} >
                                    <MaterialCommunityIcons
                                        name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color="#000" />
                                </Pressable>
                                <Text style={{ marginLeft: 5 }}>{item.txt}</Text>
                            </View>
                        </View>
                    </Card>
                )}
            />
        );

    }

    const handlePredict = () => {
        let list = ""
        for (let i = 0; i < selected.length; i++) {
            list += selected[i].txt + ",";
        }
        list = list.substring(0, list.length - 1)
        fetch(`http://${host}:8000/predict/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                symptoms: list
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Invalid');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful login
                console.log("Disease : ", data)
                setDisease(data)
                navigation.navigate('Prediction',{
                    disease:data,
                });
            })
    }

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: '2%' }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={{ flex: 5 }}>
                {renderFlatList(data)}
            </View>
            <Text style={styles.text}>Selected </Text>
            <View style={{ flex: 2 }}>
                {renderFlatList(selected)}
            </View>
            <StatusBar />
            <TouchableOpacity style={styles.loginBtn} onPress={handlePredict}>
                <Text style={styles.loginText}>Predict</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        padding: 15,
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalView: {
        margin: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginText: {
        marginBottom: 5,
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginBtn: {
        width: "50%",
        marginBottom: "2%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#172E68",
        alignSelf: 'center',
    },
});


