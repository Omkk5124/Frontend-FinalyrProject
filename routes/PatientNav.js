import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../components/login';
import Listdoc from '../components/listdoc';
import Prediction from '../components/prediction';
import Registerp from "../components/registerp";
import Profilep from '../components/profile';
import 'react-native-gesture-handler';
// import Header from '../components/header';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const PDrawer=()=>{
    return(
    <Drawer.Navigator 
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
        <Drawer.Screen name="Prediction" component={Prediction} />
        <Drawer.Screen name="Profilep" component={Profilep} 
        options={{
          title: 'Patient Profile',
        }}
        />
      </Drawer.Navigator>
    )
}

const PatientStack =()=> {
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
      <Stack.Screen name="Registerp" component={Registerp}
      options={{
        title: 'Patient Registration',
      }}
      />
      <Stack.Screen name="Prediction" component={PDrawer} 
      options={{
        headerShown: false,
        headerBackVisible:false,
        }}
         />
      <Stack.Screen name="Listdoc" component={Listdoc} options={{
        title: 'List of doctors',
      }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PatientStack;