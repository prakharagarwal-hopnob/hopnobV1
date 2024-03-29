import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Dimensions, FlatList,ScrollView,TouchableHighlight, StyleSheet, Text, View,Button,TextInput,TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image from 'react-native-scalable-image';

  export default function StyleTestOne({navigation}){
              
          const dimensions = Dimensions.get('window');
            const DeviceWidth = dimensions.width;
            const DeviceHeight = dimensions.height;

    
            var [ isPress, setIsPress ] = React.useState(false);
              var touchProps = {
                activeOpacity: 1,
                underlayColor: '#E4637C',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
                style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
                onHideUnderlay: () => setIsPress(false),
                onShowUnderlay: () => setIsPress(true),
                onPress: () =>  navigation.navigate('StyleTestTwo') ,                 // <-- "onPress" is apparently required
              };

              return (
                <>
                 <StatusBar style='dark'/>
                 <View style={styles.appContainer}>
                  <View style={{flexDirection:'row',backgroundColor:'white', width:'100%',alignItems:'center', justifyContent:'space-around'}}>
                    {/* <View style={{ width:'50%', alignItems:'flex-start',marginTop:25}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
                       <Image width={40} height={40} source={require('../../assets/images/backbutton.png')} />
                      </TouchableOpacity>
                    </View>
                   */}

                    <View style={{width:'100%', alignItems:'flex-end',marginTop:25}}>
                      <TouchableOpacity onPress={()=> navigation.navigate('StyleTestTwo') }>
                      <Text style={{fontSize:12,fontWeight:'700'}}> SKIP </Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                    
                    {/* title */}
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:22,fontWeight:'400'}}> Easy size comparison</Text>
                    </View>

                    {/* tabs */}
                    <View style={{  marginTop:26,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                        <View style={{ borderBottomColor:'#E4637C',alignItems:'center' ,width:'48%', borderBottomWidth:1,marginRight:'4%' }}>
                                <Text style={{padding:4, color:'#E4637C', fontSize:15,fontWeight:'700',}}>Bust  </Text>
                        </View>
                        <View style={{borderBottomColor:'#A2A2A2',alignItems:'center' ,width:'48%', borderBottomWidth:1,}} >
                                <Text style={{padding:4,  color:'#A2A2A2', fontSize:15,fontWeight:'700'}}> Hips </Text>
                        </View>
                    </View>

                    {/* image background */}

                    <View style={{marginTop:50,alignItems:'center'}}>
                    <Image width={DeviceWidth*0.70} source={ require('../../assets/images/UserStyles/style1.png')} />
                    </View>

           
                    {/* NEXT */}
                    <View style={{backgroundColor:'white', alignItems:'center', }}>
                      <View style={{marginBottom:15,marginTop:30}}>
                      <Text style={{color:'#394297',fontSize:16,fontWeight:'700'}}>IS YOUR BUST BIGGER THAN YOUR WAIST? </Text>
                      </View>

                    
                      <View style={{justifyContent:'space-around',flexDirection:'row',}}>
                      
                        <View style={{marginRight:10}}>
 
                        <TouchableHighlight  {...touchProps}>
                          <Text  style={{ fontSize:14,fontWeight:'400', color:'black' , textAlign:'center'}}>Yes</Text>
                        </TouchableHighlight>
                        </View>

                         <View style={{marginRight:10}}>
                         <TouchableHighlight {...touchProps}>
                          <Text  style={{fontSize:14,fontWeight:'400', color:'#1E1E1E', textAlign:'center'}}>No</Text>
                        </TouchableHighlight>
                         </View>

                         <View style={{marginRight:10}}>
                        <TouchableHighlight {...touchProps}>
                          <Text  style={{fontSize:14,fontWeight:'400', color:'#1E1E1E', textAlign:'center'}}>Same Size</Text>
                        </TouchableHighlight>
                         </View>

                        {/* <TouchableOpacity   onPress={()=> navigation.navigate('StyleTestTwo') }>
                          <View style={{elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'}}>
                           <Text style={{fontSize:14,fontWeight:'700', color:'#1E1E1E', textAlign:'center'}}>Yes</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> navigation.navigate('StyleTestTwo') } >
                          <View style={{ elevation: 2, shadowColor: '#52006A',  alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'}}>
                           <Text style={{fontSize:14,fontWeight:'700', color:'#1E1E1E', textAlign:'center'}}>No</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> navigation.navigate('StyleTestTwo') } >
                          <View style={{elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43, borderRadius:10,backgroundColor:'white'}}>
                           <Text style={{fontSize:14,fontWeight:'700', color:'#1E1E1E', textAlign:'center'}}>Same Size</Text>
                          </View>
                        </TouchableOpacity> */}

                      </View>

                    </View>
                     
                </View>
                </>
               
           );
    
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1, paddingLeft:25,paddingRight:25,paddingTop:25,backgroundColor:'white'
 }, 
 btnNormal: {
  
  elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'
 
},
btnPress: {
   elevation: 2, shadowColor: '#52006A', alignContent:'center',justifyContent:'space-around', width:102,height:43,marginRight:10, borderRadius:10,backgroundColor:'white'
}

});
