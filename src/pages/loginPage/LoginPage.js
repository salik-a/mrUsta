import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './LoginPageStyle'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const LoginPage = ({ navigation }) => {
    ///states are defined to keep the username, password information received from the user and the token data received after login
    // loading state is defined to show animation while logging in
    const [username, setUserName] = useState(" "); 
    const [password, setPassword] = useState(" ");
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true);

    // "delay variable" is defined for the duration of the animation in milliseconds.
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    // the start function is called to show animation while the application is opening
    useEffect(() => {
        start()
    }, []);
    
    //start function shows the animation for 1500 milliseconds and then turns it off
    const start = async () => {
        await delay(1500)
        setLoading(false);
    }
    
    // here animation is called with lottie package
    if (loading) { 
        return <LottieView source= { require('./../../assets/loading.json')} autoPlay loop/>;
    }
    
    // after clicking the login button, the handlelogin function is called
     // With the axios package, a post request is sent to the url address to pull the data
     // we call the function synchronously because we receive data asynchronously
    const handleLogin = async () => {
       
        await axios({
            method: 'post',
            url: 'https://api-uat.mrusta.com/token',
            data: (`grant_type=password&username=${username}&password=${password}`),

            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            }
        }).then((response) => {
           
            setToken(response.data.access_token)
            storeData(response.data.access_token)   // we save the incoming token data to the phone memory to use it on other pages
            navigation.navigate("JobsPage")         // When the data comes in correctly, we switch to the jobs page
            
        }).catch((error) => {
            alert("Username or password is wrong")
        })
    };

   // Using the AsyncStorage package, we save the token data to the phone memory
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('Token', value)
        } catch (e) {
            console.log(e)
        }
    };

    
    // We create 2 textinputs and a signin button to enter username and password
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../../assets/mrusta-logo.png')}
            />
            
            <View style={styles.welcome}>
               <Text style={styles.welcomeText}>Welcome!</Text>
            </View>
            <View style={styles.formRow}>
                <TextInput 
                    style={styles.textInput}
                    placeholder= "Enter username"
                    placeholderTextColor="#c0c0c0"
                    onChangeText={(text)=>setUserName(text)} // save the data entered in textinput as username parameter
                />
            </View>
            <View style={styles.formRow}>
                <TextInput 
                    style={styles.textInput}
                    placeholder= "Enter password"
                    placeholderTextColor="#c0c0c0"
                    secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}  // save the data entered in textinput as password parameter
                />
            </View>
            
            <TouchableOpacity  style={styles.button} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
           
        </View>
    );
};

export default LoginPage;


