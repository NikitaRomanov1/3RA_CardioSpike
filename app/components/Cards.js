import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const cardsObject = [
    {
        title:'Новые случаи заражения Covid-19 в Москве',
        content: '19.06.2021',
        picture: '../../assets/1.jpg'
    },
]

const Cards = () => (
  <View>
      {cardsObject.map((item)=> {
          return (
              <View key = {item.key}>
                <Card post = {item}/>
              </View>
          )
      })}
  </View>
);

export default Cards;