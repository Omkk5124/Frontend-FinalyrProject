import React, { Fragment } from "react";
import Faq from "react-faq-component";

import data from "./data";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Help() {
  return (
    <View style={styles.container}>
    <Text style = {styles.heading}>HELP</Text>
    <Fragment>
      <Faq
        data={data}
        styles={{
          bgColor: "white",
          titleTextColor: "#48482a",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "18px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "30px",
          rowContentPaddingRight: "50px",
          arrowColor: "red",
        }}
        config={{
          animate: true
        }}
      />
    </Fragment>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:"3%"
  },
  heading: {
    marginBottom: 5,
    color: "#172E68",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10
},
});