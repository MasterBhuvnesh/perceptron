import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

const Introduction = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <Image source={require('@/assets/images/icon.png')} style={styles.image} />
          <Text style={styles.label}>Perceptron</Text>
        </View>
        <TouchableOpacity style={styles.settingButton}>
          <Ionicons name="settings-sharp" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        Welcome to Perceptron! Dive into fresh, bite-sized machine learning insights every week.
        Let’s learn, grow, and explore ML together!
      </Text>
      {/* <Text style={styles.thanx}>- Bhuvnesh Verma</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#090909',
    paddingTop: 45,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 8,
  },
  label: {
    fontSize: 20,
    fontFamily: 'bold',
    color: '#fff',
  },
  settingButton: {
    padding: 6,
  },
  description: {
    marginTop: 8,
    fontSize: 13,
    color: '#fff',
    fontFamily: 'regular',
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingBottom: 20,
    textAlign: 'center',
  },
  thanx: {
    marginTop: 8,
    fontSize: 12,
    color: '#fff',
    fontFamily: 'regular',
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingBottom: 20,
    textAlign: 'center',
  },
});

export default Introduction;
