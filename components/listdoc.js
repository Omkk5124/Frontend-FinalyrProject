import { FlatList, Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
const data = [
    {d: 'Mr. ABC', p: 'Cardiologists'},
    { d: 'Mr. XYZ', p: 'Dermatologists'},
    {d: 'Mr. PQR', p: 'Hematologists'}
];

const listdoc = ({navigation}) => {
    const item = ({ item }) => (
        
        <View style={{ flexDirection: 'row' }}>
            
            <View style={{ width: 180, backgroundColor: '#F0F8FF'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25}}>{item.d}</Text>
            </View>
            <View style={{ width: 150, backgroundColor: '#F0F8FF'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25}}>{item.p}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.listdocCont}>
        <Text style={styles.heading}>List of Doctors</Text>

            <View style={{ flexDirection: 'row' }}> 
                <View style={{ width: "50%", backgroundColor: '#000000'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25,color:'#ffffff'}}>Doctor</Text>
                </View>
                <View style={{ width: "50%", backgroundColor: '#000000'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25,color:'#ffffff'}}>Specialities</Text>
                </View>
            </View>
            <FlatList data={data} renderItem={item}  />
        </View>
    );
}
export default listdoc;


const styles = StyleSheet.create({
   
    heading:{
        marginBottom:20,
        color:"#0CAFFF",
        fontSize:30,
        fontWeight: 'bold' 
    },
    listdocCont:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
    }
})