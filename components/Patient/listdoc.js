import { FlatList, Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import React, { useState,useEffect } from 'react';
import {host} from './constants'


const listdoc = ({ navigation }) => {
    const [data,setData] = useState([]);

    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
          try {
          const response = await fetch(`http://${host}:8000/doctor_list`);
          const json = await response.json();
          setData(json);
          } catch (error) {
          console.error(error);
          }
      };

    const item = ({ item }) => (
        <TouchableOpacity style={styles.loginBtn} onPress={() => {
            navigation.navigate("ProfileDr",{
                key:item.id,
            })
        }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%', backgroundColor: '#F0F8FF' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.name}</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: '#F0F8FF' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.Speciality}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25, color: '#FFFFFF' }}>Doctor Name</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25, color: '#FFFFFF' }}>Speciality</Text>
                </View>
            </View>
            <FlatList data={data} renderItem={item} />
        </View>
    );
}
export default listdoc;


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})