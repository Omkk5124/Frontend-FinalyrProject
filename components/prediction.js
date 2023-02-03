import { FlatList, Text, View,StyleSheet,TouchableOpacity, } from 'react-native';
import React from 'react';
const data = [
    { d: "Disease", p: 'Percentage'},
    {d: 'Diabetes', p: '20%'},
    { d: 'Flu', p: '10%'},
    {d: 'Malaria', p: '10%'},
    {d:"Cold",p:"10%"}
];
const prediction = () => {
    const item = ({ item }) => (
        
        <View style={{ flexDirection: 'row' }}>
            
            <View style={{ width: 150, backgroundColor: '#F0F8FF'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25}}>{item.d}</Text>
            </View>
            <View style={{ width: 150, backgroundColor: '#F0F8FF'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25}}>{item.p}</Text>
            </View>
        </View>
    );
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '40%'}}>
        <Text style={styles.heading}>Percentage of Diseases</Text>
            <FlatList data={data} renderItem={item}  />

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Find Doctor</Text>
            </TouchableOpacity>
        </View>
    );
}
export default prediction;


const styles = StyleSheet.create({
    loginText: {
        marginBottom: 5,
        color: "black",
        fontSize: 20,
        fontWeight: 'bold'
    },
    heading:{
        marginBottom:20,
        color:"#0CAFFF",
        fontSize:30,
        fontWeight: 'bold'
    
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
})