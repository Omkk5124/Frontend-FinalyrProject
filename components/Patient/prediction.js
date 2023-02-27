import { FlatList, Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import React from 'react';
const data = [
    { d: 'Diabetes', p: '20%' },
    { d: 'Flu', p: '10%' },
    { d: 'Malaria', p: '10%' },
    { d: "Cold", p: "10%" }
];

const prediction = ({navigation}) => {
    const item = ({ item }) => (

        <View style={{ flexDirection: 'row' }}>

            <View style={{ width: 150, backgroundColor:'#F0F8FF' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.d}</Text>
            </View>
            <View style={{ width: 150, backgroundColor: '#F0F8FF' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 }}>{item.p}</Text>
            </View>
        </View>
    );
    return (
        <View style={{margin:0}}>
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '30%' }}>
                    <FlatList data={data} renderItem={item} />
                    <TouchableOpacity style={styles.loginBtn}
                    onPress={()=>navigation.navigate("ListDoc")}
                    >
                        <Text style={styles.loginText}>Find Doctor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default prediction;


const styles = StyleSheet.create({
    container: {
        flex: 9,
    },
    tinyLogo: {
        height: 41,
        marginBottom: 0,
        width: 140,
        marginTop: 0,
        marginLeft:20
    },
    heading: {
        marginBottom: 20,
        color: "#172E68",
        fontSize: 22,
        fontWeight: 'bold'
    },
    loginText: {
        marginBottom: 5,
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginBtn: {
        width: 200,
        borderRadius:20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#172E68",
    },
})