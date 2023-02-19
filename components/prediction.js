import { FlatList, Text, View,StyleSheet,TouchableOpacity, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const data = [
    // { d: "Disease", p: 'Percentage'},
    {d: 'Diabetes', p: '20%'},
    { d: 'Flu', p: '10%'},
    {d: 'Malaria', p: '10%'},
    {d:"Cold",p:"10%"}
];
const prediction = ({navigation}) => {
    // const {itemId,params} = route.params;
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}> 

            <View style={{ width: "50%"}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25}}>{item.d}</Text>
            </View>
            <View style={{ width: "50%"}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25}}>{item.p}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.predictionCont}>
     
        <Text style={styles.heading}>Percentage of Diseases</Text>
            <View style={{ flexDirection: 'row' }}> 

            <View style={{ width: "50%", backgroundColor: '#000000'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25,color:'#ffffff'}}>Disease</Text>
            </View>
            <View style={{ width: "50%", backgroundColor: '#000000'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center',padding:25,color:'#ffffff'}}>Prediction</Text>
            </View>
        </View>
            <FlatList data={data} renderItem={item}  />

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={() => navigation.navigate('Listdoc')}>Find Doctor</Text>
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
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#0CAFFF",
        bottom:"2%",
    },
    predictionCont:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
    }
})