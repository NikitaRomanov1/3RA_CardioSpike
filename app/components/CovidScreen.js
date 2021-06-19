import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Loader from './Loader';
import {Avatar} from 'react-native-paper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CovidScreen = () => {

  const [time,setTme] = useState(true)

  const timeChange = () => {
      setTme(false)
  }
  setTimeout(timeChange, 2000)
const smile_obj = [
  {
    'image': require('../../assets/happy.png'),
    'text': 'Вы здоровы!',
    'covid_prob': 'Вероятность COVID-19 низкая'
  },
  {
    'image': require('../../assets/happy.png'),
    'text': 'Вы здоровы!',
    'covid_prob': 'Вероятность COVID-19 низкая'
  },
  {

  }
]

  return (
    <View style = {styles.container}>
    { time ? <Loader /> : 
     <View style = {styles.image}>
      <Avatar.Image source={require('../../assets/happy.png')} size = {180}/>
      <Text style = {styles.text}>Вы здоровы!</Text>
      <Text style = {styles.covid_prob}>Вероятность COVID-19 низкая</Text>
      </View> 
     }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    height: windowHeight,
    width:  windowWidth   
  },
  text: {
    marginTop: 25,
    fontSize: 20
  },
  Covid_prob: {
    fontSize: 15,
    marginTop: 10
  }
})
export default CovidScreen;
{/* <View>
      <Image source={require('../../assets/happy.png')}/></View> */}