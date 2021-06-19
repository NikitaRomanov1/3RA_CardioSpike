import React from 'react'
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import CovidScreen from './CovidScreen';

const windowHeight = Dimensions.get('window').height;

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={require('../../assets/male-avatar.png')}
                size={80}
              />
              <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {
                  marginTop:15,
                  marginBottom: 5,
                }]}>Никита Романов</Title>
                <Caption style={styles.caption}>@n_romanov</Caption>
              </View>
            </View>
          </View>
    
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>Анапа, Россия</Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>+7-123-456-78</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>nikita038rus@gmail.com</Text>
            </View>
          </View>
    
          <View style={styles.infoBoxWrapper}>
              <View style={[styles.infoBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1
              }]}>
                <Title>36</Title>
                <Caption>Все измерения</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>12</Title>
                <Caption>Графики суточных измерений</Caption>
              </View>
          </View>
    
          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="heart-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Измерить пульс</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="chart-line" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Измерить сатурацию кислорода</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {navigation.navigate('CovidScreen')}}>
              <View style={styles.menuItem}>
                <Icon name="share-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Сделать прогноз на COVID-19</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="settings-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Настройки</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="account-check-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Написать в поддержку</Text>
              </View>
            </TouchableRipple>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },})
export default Profile;
