import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity,Pressable } from 'react-native';
import styles from './JobsCardStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const JobsCard = ( {jobs, onSelect} ) => {
    
    //we create a jobCard to show the incoming jobs data using Flatlist.
     // to switch to the detail page when the card is clicked, we call the onSelect parameter when the card is clicked

    return (
        <Pressable style={styles.container}  onPress={onSelect}>
            <View   >
                <Text style={styles.titleText}>{jobs.Job.Title}</Text>
                <View style={styles.top}>
                    <View style={styles.date}>
                        <Ionicons name="time-outline" color={"black"} size={20}  />
                        <Text style={styles.dateText}>{jobs.Job.JobDate}</Text>
                    </View>
                    <View style={styles.customer}>
                        <FontAwesome name="user" color={"black"} size={20}  />
                        <Text style={styles.customerText}>{jobs.Job.CustomerName}</Text>
                    </View>
                    
                    <Text style={styles.statusText}>{jobs.Job.Status}</Text>
                </View>
               
                <Text style={styles.descriptionText}>:{jobs.Job.Description}</Text>
              
                <TouchableOpacity style={styles.button} onPress={onSelect}>
                    <Text style={styles.textButton}>Apply Now</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};
export default JobsCard;