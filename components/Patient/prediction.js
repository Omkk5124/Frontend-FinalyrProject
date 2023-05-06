import { FlatList, Text, View, StyleSheet, Image,Pressable,TouchableOpacity } from 'react-native';
import React from 'react';

const Prediction = ({ route,navigation }) => {
    const {disease}=route.params;
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '50%', backgroundColor: '#F0F8FF' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.d}</Text>
            </View>
            <View style={{ width: '50%', backgroundColor: '#F0F8FF' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.p}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.prediction}>{disease}</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("ListDoc")}>
                    <Text style={styles.loginText}>Find Doctor</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Prediction;


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        direction:'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        width:'100%',
    },
    loginText: {
        marginBottom: 5,
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginBtn: {
        width: "50%",
        marginBottom:"2%",
        borderRadius:20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#172E68",
    },
    prediction:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:30,
    }
})