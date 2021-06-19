import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar,} from 'react-native-paper';

const HomeBar = () => {
  return (
    <Appbar.Header style = {styles.container}>
      <Appbar.Content  color = 'white' title="CardioSpike App" />
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#76a6ef',
    },
  });

export default HomeBar;

