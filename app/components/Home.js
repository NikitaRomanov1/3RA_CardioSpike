import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
import HomeBar from './HomeBar';
import NewCard from './Card'


const cardsObject = [
  {   id:'1',
      title:'Новые случаи заражения Covid-19 в Москве',
      content: '19.06.2021',
      picture: require('../../assets/1.jpg')
  },
  { id:'2',
    title:'За сутки в России выявили более 17 тыс. заболевших COVID-19',
    content: '19.06.2021',
    picture: require('../../assets/2.jpg')
},
{ id:'3',
  title:'Мэр Москвы продлил ограничительные меры по коронавирусу до 29 июня',
  content: '18.06.2021',
  picture: require('../../assets/3.jpg')
},
{ id:'4',
  title:'В Москве откроют еще два обсерватора для пациентов с легким течением COVID-19',
  content: '17.06.2021',
  picture: require('../../assets/4.jpg')
},
]

const Home = () => {
  return (
    <AnimatedScrollView style = {styles.container}>
    <HomeBar/>
    <View style = {styles.mainText}>
      <Text style = {styles.NewsText}>Последние новости о Covid-19</Text>
    </View>
    <View>
      {cardsObject.map((item)=> {
          return (
              <View key = {item.id}>
                <NewCard post = {item}/>
              </View>
          )
      })}
  </View>
    </AnimatedScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  mainText: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    marginBottom: 15
  },
  NewsText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'sans-serif'
  }
});

export default Home;
