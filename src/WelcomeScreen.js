import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('../assets/Logi.png')} style={styles.logo} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:70
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default WelcomeScreen;