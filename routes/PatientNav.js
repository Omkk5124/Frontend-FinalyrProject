import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../components/Patient/login';
import Listdoc from '../components/Patient/listdoc';
import Prediction from '../components/Patient/prediction';
import Registerp from "../components/Patient/registerp";
import Symptoms from "../components/Patient/symptoms_selection"
import PHome from "../components/Patient/PHome"
import Patient_profile from "../components/Patient/Patient_profile"
import Doctor_profile from "../components/Patient/Drprofile"
import Help from '../components/Helppage/Help';
import UploadP from '../components/uploadP';
import 'react-native-gesture-handler';
import {
  View,
  Image,
  StyleSheet,
} from "react-native";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const PDrawer=()=>{
//     return(
//     <Drawer.Navigator 
//     screenOptions={{
//         headerStyle: {
//           backgroundColor: '#2bc0ff',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//     >
//         <Drawer.Screen name="Prediction" component={Prediction} />
//         <Drawer.Screen name="Profilep" component={Profilep} 
//         options={{
//           title: 'Patient Profile',
//         }}
//         />
//       </Drawer.Navigator>
//     )
// }

const PatientStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2bc0ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PHome" component={PHome}
          options={{
            headerShown: false,
            headerBackVisible:false,
          }}
        />
        <Stack.Screen name="Registerp" component={Registerp}
          options={{
            title: 'Patient Registration',
          }}
        />
        <Stack.Screen name="Symptoms" component={Symptoms}
          options={{
            title: 'Select the symptoms',
          }}
        />
        <Stack.Screen name="Prediction" component={Prediction}
          options={{
            title: 'Disease Predicted',
          }}
        />
        <Stack.Screen name="ListDoc" component={Listdoc}
          options={{
            title: 'List of doctors',
          }} />
          <Stack.Screen name="Profilep" component={Patient_profile}
          options={{
            title: 'Profile',
          }} />
          <Stack.Screen name="ProfileDr" component={Doctor_profile}
          options={{
            title: 'Profile',
          }} />
          <Stack.Screen name="HelpPage" component={Help}
          options={{
            title: 'Help',
          }} />
           <Stack.Screen name="UploadDoc" component={UploadP}
          options={{
            title: 'Upload Documnets',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
      height: 41,
      marginBottom: 0,
      width: 140,
      marginTop: 0,
      marginLeft: 0
  }
})

export default PatientStack;