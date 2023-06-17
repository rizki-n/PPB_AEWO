import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, SafeAreaView } from 'react-native';

const Reservasi = () => {
  const data = [
    { id: '1', image: require('../assets/1.png'), description: 'Tracking Item 1' },
    { id: '2', image: require('../assets/2.png'), description: 'Tracking Item 2' },
    { id: '3', image: require('../assets/3.png'), description: 'Tracking Item 3' },
    { id: '4', image: require('../assets/edu11.png'), description: 'Edukasi Item 1' },
    { id: '5', image: require('../assets/edu22.png'), description: 'Edukasi Item 2' },
    { id: '6', image: require('../assets/edu33.png'), description: 'Edukasi Item 3' },
  ];

  const renderImageItem = ({ item }) => {
    const imageStyles = item.description.includes('Tracking') ? styles.TrackingImage : styles.EdukasiImage;

    return (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={[styles.image, imageStyles]} />
        <Text style={styles.imageDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View><Text style={styles.heading}>Reservasi Argowita</Text></View>
      {['Tracking', 'Edukasi'].map((category) => (
        <View key={category}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <FlatList
            horizontal
            data={data.filter((item) => item.description.includes(category))}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={renderImageItem}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  flatListContainer: {
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
  },
  image: {
    borderRadius: 20,
  },
  TrackingImage: {
    width: 280,
    height: 195,
  },
  EdukasiImage: {
    width: 198,
    height: 250,
  },
  imageDescription: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Reservasi;
