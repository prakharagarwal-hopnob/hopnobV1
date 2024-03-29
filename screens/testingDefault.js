
import { VideoExportPreset } from 'expo-image-picker';
import React ,{useState} from 'react';
import { FlatList,ScrollView, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
 import axios from 'axios';

import Bottomnav from './components/bottom_navbar';
export default function DefaultTestingPage({navigation}) {
            const Post = () =>{
                axios.post("https://hopnob-backend-cctjhm4vha-uc.a.run.app/api/v1/auth/register", 
                {
                    "firstName": "Anadi",
                    "lastName": "Vyas",
                    "email": "anadi@gmail.com",
                    "username": "balikavadhu",
                    "password": "rawal@123",
                    "mobileNumber": "9773984541"
                }
                )
                  .then((response) => {
                    console.log('Success:-New user created');
                    console.log(response);
                  }).catch((response)=>{
                    console.log('Falied to Create new user');
                    console.log(response);
                  })
                  ;
            }
            const wardrobeFeedButton =() => {
                navigation.navigate('WardrobePage');
            }
            const wardrobeHopnobButton = () =>{
                navigation.navigate('ProductHopnobPage');
            }
            const wardrobeConsumerButton =() => {
                navigation.navigate('ProductConsumerPage');
            }
            const defaultButton =() => {
                navigation.navigate('default');
            }
            const addButton =() => {
                navigation.navigate('addSection');
            }
            const launchButton =() =>{
                navigation.navigate('launchPage');
            }
            const introButton =() =>{
                navigation.navigate('IntroductoryPageZero');
            }
    return (
        <View style={styles.appContainer}>
                        <Text style={{margin:10}}>Page for testing Screens</Text>
                        <View style={{padding:10, flexDirection:'column'}}>
                                <Button onPress={Post} title='Post'/>
                        </View>
                        <View style={{padding:10, flexDirection:'column',}}>
                                <Button onPress={wardrobeFeedButton} title='Wardrobe Feed'/>
                        </View>
                        <View style={{padding:10, flexDirection:'column',}}>
                                <Button onPress={wardrobeHopnobButton} title='Wardrobe Hopnob Product'/>
                        </View>
                        <View style={{padding:10, flexDirection:'column',}}>
                                <Button onPress={wardrobeConsumerButton} title='Wardrobe Consumer Product'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={defaultButton} title='Default Page'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={addButton} title='Add Section'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={launchButton} title='Launch Page'/>
                        </View>
                        <View style={{padding:10, wardrobeConsumerButton:'column',}}>
                                <Button onPress={introButton} title='Introductory Page'/>
                        </View>
                     {/* navigation */}
                    
                </View>
        
        
    );
}
 

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     marginTop:30,
     padding:30,
     backgroundColor:'grey',
 }, 
});
