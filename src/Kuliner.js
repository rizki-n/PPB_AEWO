import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

const Kuliner = () => {
  const data = [
    { id: '1', image: require('../assets/mkn1.png'), description: 'Makanan Item 1' },
    { id: '2', image: require('../assets/mkn2.png'), description: 'Makanan Item 2' },
    { id: '3', image: require('../assets/mkn3.png'), description: 'Makanan Item 3' },
    { id: '4', image: require('../assets/mnm1.png'), description: 'Minuman Item 1' },
    { id: '5', image: require('../assets/mnm2.png'), description: 'Minuman Item 2' },
    { id: '6', image: require('../assets/mnm3.png'), description: 'Minuman Item 3' },
  ];

  const renderImageItem = ({ item }) => {
    const imageStyles = item.description.includes('Makanan') ? styles.MakananImage : styles.MinumanImage;

    return (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={[styles.image, imageStyles]} />
        <Text style={styles.imageDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.heading}>Kuliner Argowita</Text>
      
      {['Makanan', 'Minuman'].map((category) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
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
  MakananImage: {
    width: 300,
    height: 200,
  },
  MinumanImage: {
    width: 300,
    height: 200,
  },
  imageDescription: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Kuliner;
