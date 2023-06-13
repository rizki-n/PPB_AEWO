import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const About = () => {
  const openMapsLink = () => {
    Linking.openURL("https://goo.gl/maps/pvs7rax8jcs4Snct9");
  };

  const openWhatsApp = () => {
    Linking.canOpenURL('whatsapp://send?text=Hello').then((supported) => {
      if (supported) {
        return Linking.openURL('whatsapp://send?text=Hello');
      } else {
        return Linking.openURL('https://web.whatsapp.com/send?text=Hello');
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={require('../assets/AEWO.jpg')} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.bold}>About</Text>
          <Text style={styles.description}>
            Agro Eduwisata Organik Mulyaharja merupakan kampung wisata edukasi yang berdiri pada tahun 2021, tujuan utama tempat wisata ini tentusaja pada bidang edukasi dan pariwisata. Edukasi yang ditawarkan berupa tatacara berkebun, informasi tentang ladang sekitar, hingga belajar menanam padi. Selain itu, di sini terdapat spot foto dan kuliner makanan lokal yang dimasak langsung oleh warga sekitar. Hal ini juga bertujuan untuk meningkatkan perekonomian warga sekitar.
          </Text>
        </View>
        <Text style={styles.bold}>Open:</Text>
        <Text style={styles.openHours}>
          Senin-Minggu | 07.30 - 17.00 WIB
        </Text>
        <Text style={styles.bold}>Location:</Text>
        <Text style={styles.location}>
          RT.05/RW.01 Mulyaharja, Bogor Selatan Bogor City, West Java 16135
        </Text>
        <TouchableOpacity onPress={openMapsLink}>
          <Image source={require('../assets/maps.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
          <Text style={styles.buttonText}>Contact us on WhatsApp</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  image: {
    width: 350,
    height: 180,
    borderRadius: 20,
    marginTop: 20,
  },
  descriptionContainer: {
    marginTop: 10,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    textAlign: 'left',
  },
  openHours: {
    marginTop: 10,
    fontSize: 13,
    textAlign: 'left',
  },
  location: {
    marginTop: 10,
    fontSize: 13,
    textAlign: 'left',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default About;
