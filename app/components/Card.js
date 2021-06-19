import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph,TouchableRipple } from 'react-native-paper';
import {Cards} from '../components/Cards'


const NewCard = ({post}) => (
    <TouchableRipple onPress={() => {}}>
  <Card>
    <Card.Content>
      <Title>{post.title}</Title>
      <Paragraph>{post.content}</Paragraph>
      <Card.Cover source={post.picture} />
    </Card.Content>
  </Card>
  </TouchableRipple>
);

export default NewCard;
