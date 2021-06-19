import React, {useState} from 'react';
import { View, Text,StyleSheet, ActivityIndicator } from 'react-native';

const Loader = () => {

  return (
    <View style={[styles.container, styles.horizontal]}>
 <View>
      <Text>Зафиксируйте браслет на руке</Text>
      <View style = {styles.text}>
          <Text >Вычисляю...</Text>
       </View>
    <ActivityIndicator size="large" color="#76a6ef" />
    </View>

  </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
text: {
    justifyContent:'center',
    alignItems:'center'
}})
export default Loader;