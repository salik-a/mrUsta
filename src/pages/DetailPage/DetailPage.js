import React,{useState, useEffect} from 'react';
import { View, Text,Image } from 'react-native';
import styles from './DetailPageStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const DetailPage = ({ route, navigation }) => {
    
   // in this part, we are sending a request to the desired page using the existing token, but since I could not pull the data from the page, I used the route parameters came from the previous page

    // const [jobsData, setJobsData] = useState("null");

    // const getData = async () => {
    // try {
    //     const token = await AsyncStorage.getItem('Token')
    //     await axios({
    //         method: 'get',
    //         url: `https://api-uat.mrusta.com/v1/UAE-en/job/detail/${route.params.data.Id}`,
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }).then((response) => {
    //         setJobsData(response)
           
            
      
    //     }).catch((error) => {
    //         console.log(error);
    //     });
        

        
    // } catch(e) {
    //     // error reading value
    // }
    // }

    
    // useEffect(() => {
    //     getData();
    //    console.log(jobsData)
    // }, []);
       

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.image}>
                     <Image
                        style={{width:100, height:100}}
                        source={{
                        uri: `${route.params.data.Thumb}`,
                    }}
                />
               </View>
                <View style={styles.header}>
                    <Text style={styles.title}>{route.params.data.Title}</Text>
                    <Text style={styles.id}>{route.params.data.Id}</Text>
                </View>
                <View style={styles.date}>
                    <Text style={styles.dateText}>JobDate: {route.params.data.JobDate}</Text>
                    <Text style={styles.dateText}>CreatedOnUtc: {route.params.data.CreatedOnUtc}</Text>
                </View>
                <View style={styles.jobHeader}>
                    <Text style={styles.jobText}>Job Description</Text>
                </View>
                <View style={styles.description}>
                    <Text>{route.params.data.Description}</Text>
                </View>
                <View style={styles.customer}>
                     <FontAwesome name="user" color={"black"} size={20}  />
                    <Text>{route.params.data.CustomerName}</Text>
                    <Text>{route.params.data.CustomerId}</Text>
                    <Text>{route.params.data.Status}</Text>
                </View>
                
                
            </View>
        </View>
    );
};

export default DetailPage ;