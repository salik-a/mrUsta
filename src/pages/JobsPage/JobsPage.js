import React,{useState, useEffect} from 'react';
import { View, Text,TouchableOpacity, FlatList, BackHandler} from 'react-native';
import styles from './JobsPageStyle'
import axios from 'axios';
import JobsCard from './../../components/JobsCard/JobsCard'
import AsyncStorage from '@react-native-async-storage/async-storage';


const JobsPage = ({ navigation }) => {

    //we will save the data coming from the url address to the state
    const [jobsData, setJobsData] = useState([]);

    //we call the getData function using useEffect to get the data when the page is opened.
    useEffect(() => {
        getData();
    }, []);

    //here we call the token we keep in the phone memory and use it to send a get request to the url address and pull the data
    const getData = async () => {
    try {
        const token = await AsyncStorage.getItem('Token')
        
        await axios({
            method: 'get',
            url: 'https://api-uat.mrusta.com/v1/UAE-en/ustajobs/myjobsbypage/1',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            // we save the incoming data to state
            setJobsData(response.data.Data)
            
      
        }).catch((error) => {
            console.log(error);
        })
        
        
    } catch(e) {
        // error reading value
    }
        
    }

    
   //we use this function to switch to the detail page when clicking on the jobsCard.
     // using navigation we navigate to the other page and send the data as a parameter
    const handleCardSelect = (data) => {
        navigation.navigate('DetailPage',  {data} )
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>JOBS</Text>
            </View>

            <FlatList
                renderItem={({item}) => <JobsCard jobs={item} onSelect={() => handleCardSelect(item.Job)}/>}
                data={jobsData}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
};

export default JobsPage;


