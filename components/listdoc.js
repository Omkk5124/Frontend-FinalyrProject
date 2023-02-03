import { FlatList, Text, View,StyleSheet } from 'react-native';
import React from 'react';
const data = [
    { d: "Doctor Name", p: 'Speciality'},
    {d: 'Mr. ABC', p: 'Cardiologists'},
    { d: 'Mr. XYZ', p: 'Dermatologists'},
    {d: 'Mr. PQR', p: 'Hematologists'}
];
const listdoc = () => {
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '40%'}}>
        <Text style={styles.heading}>List of Doctors with Specialities</Text>
            <FlatList data={data} renderItem={item}  />
        </View>
    );
}
export default listdoc;


const styles = StyleSheet.create({
   
    heading:{
        marginBottom:20,
        color:"#0CAFFF",
        fontSize:20,
        fontWeight: 'bold'
    
    },
})