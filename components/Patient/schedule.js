import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Pressable, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from "react";
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Schedule() {
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };


  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  };


  return (
    <View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 40 }}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/logo.png')} />

        </View>
        <View style={styles.container}>
          {!datePicker && (
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={.5}
              onPress={showDatePicker}>
              <View style={{ flex: 1 }}>
                <View style={{
                  flex: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}>

                  <Fontisto.Button
                    name="date"
                    type="FontAwesome"
                    style={{
                      backgroundColor: '#42c1fc',
                      marginRight: -11,
                    }}
                    size={117}
                    color='#fff'
                    onPress={showDatePicker}
                    />
                </View>
                <View>
                  {/* <Text style={styles.TextStyle}>{date.toDateString()}</Text> */}
                  <Text style={styles.TextStyle}>Edit Date</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected}
              style={styles.datePicker}
            />
          )}


          {!timePicker && (
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={.5}
              onPress={showTimePicker}
              >
              <View style={{ flex: 1 }}>
                <View style={{
                  flex: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}>

                  <MaterialCommunityIcons.Button
                    name="clock-edit-outline"
                    type="FontAwesome"
                    style={{
                      backgroundColor: '#42c1fc',
                      marginRight: -11,

                    }}
                    size={117}
                    color='#fff'
                    onPress={showTimePicker}
                     />
                </View>
                <View>
                  {/* <Text style={styles.TextStyle}>{time.toTimeString()}</Text> */}
                  <Text style={styles.TextStyle}>Edit Time</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}


          {timePicker && (
            <DateTimePicker
              value={time}
              mode={'time'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={false}
              onChange={onTimeSelected}
              style={styles.datePicker}
            />
          )}
        </View>


        <View style={styles.MainContainer}>

          <View style={styles.dateScreen}>
            <Text style={styles.TextStyle}>{date.toDateString()}</Text>
            <Text style={styles.TextStyle}>{time.toTimeString()}</Text>
          </View>


        </View>



        <View>
          <Button title="Submit" onPress={{}} />
        </View>
      </View >

    </View>






  )
}


const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    display:'flex',
    flexDirection: 'row',
    

  },

  MainContainer: {
    flex:4,
  },
  tinyLogo: {
    height: 41,
    marginBottom: 0,
    width: 140,
    marginTop: 0,
    marginLeft: 0
  },
  SubmitButtonStyle: {

    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#42c1fc',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 160,
    height: 190
  },
  dateScreen:{
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 320,
    height: 100
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },

  TextStyle: {
    color: '#172E68',
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 10
  }
});