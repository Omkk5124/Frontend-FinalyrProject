import { FlatList, Text, View, StyleSheet, Image,Pressable,TouchableOpacity } from 'react-native';
import React from 'react';
const data = [
    { d: 'Flu', p: '20%' },
    { d: 'Cancer', p: '10%' },
    { d: 'Fever', p: '50%' }
];
const Prediction = ({ navigation }) => {
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
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25,color:'#FFFFFF' }}>Diseases</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 25 ,color:'#FFFFFF'}}>Probability</Text>
                </View>
            </View>
            <FlatList data={data} renderItem={item} />
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
        width: 200,
        borderRadius:20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#172E68",
        bottom:'2%',
    },
})