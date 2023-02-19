import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Registerp from './components/registerp';
// import Menu from './components/menu';
import Prediction from './components/prediction';
import Listdoc from './components/listdoc';
import Profile from './components/profile';
import PatientNav from './routes/PatientNav';


export default function App() {
  return (
     <PatientNav/>
    // <Registerp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
