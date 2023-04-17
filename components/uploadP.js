import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from "react-native";


const UploadP = () => {


    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const postDetails = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "instaclone");
        data.append("cloud_name", "jayu");
        fetch("	https://api.cloudinary.com/v1_1/jayu/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setUrl(data.url);
                console.log(data.url);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (


        <View style={styles.container}>
           
                <View style={{ flex: 1, marginTop: 40 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={require("../assets/logo.png")} />

                </View>
          
            <View style={styles.lower}>
                <div style={styles.fileContent}>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>

                <button style={styles.loginBtn}
                    onClick={() => postDetails()}>
                    <Text style={styles.loginText}>Upload Prescription</Text>
                </button>
            </View>


        </View>

    );
};

export default UploadP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 40
    },
    loginBtn: {
        borderRadius: 15,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#172E68",
        marginBottom: 30,
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    loginText: {
        marginBottom: 5,
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    lower: {
        flex: 8,
    
    },
    tinyLogo: {
        marginLeft: 10,
        height: 41,
        marginBottom: 0,
        width: 140,
        marginTop: 0,
    },
    fileContent:{
        marginTop:"20%",
        marginLeft:"auto",
        marginRight:"auto"
    }

});