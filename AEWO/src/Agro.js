import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Logo = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Add a back button or any other elements if needed */}
      </View>
      <View style={styles.contentContainer}>
        <Image source={require('../assets/AEWO.jpg')} style={styles.logoImage} />
        <Text style={styles.subTitle}>Argowisata</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#808080',
  },
  back: {
    marginRight: 130,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    backgroundColor: '#808080',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
    fontStyle: 'italic',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#808080',
  },
  icon: {
    marginHorizontal: 70,
  },
  buttonContainer: {
    backgroundColor: 'green',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginVertical: 16,
  },
  buttonText: {
    borderRadius: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Logo;
