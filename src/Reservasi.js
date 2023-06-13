import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';

const Reservasi = () => {
  const data = [
    { id: '1', image: require('../assets/1.png'), description: 'Tracking Item 1' },
    { id: '2', image: require('../assets/2.png'), description: 'Tracking Item 2' },
    { id: '3', image: require('../assets/3.png'), description: 'Tracking Item 1' },
    { id: '4', image: require('../assets/11.png'), description: 'Edukasi Item 1' },
    { id: '5', image: require('../assets/22.png'), description: 'Edukasi Item 2' },
    { id: '6', image: require('../assets/33.png'), description: 'Edukasi Item 3' },
  ];

  const renderImageItem = ({ item, index }) => {
    let imageWidth = 350;
    let imageHeight = 180;

    if (item.id === '1') {
      imageWidth = 300;
      imageHeight = 200;
    } else if (item.id === '2') {
      imageWidth = 300;
      imageHeight = 200;
    } else if (item.id === '3') {
      imageWidth = 300;
      imageHeight = 200;
    }
    else if (item.id === '11') {
      imageWidth = 500;
      imageHeight = 100;
    } else if (item.id === '22') {
      imageWidth = 500;
      imageHeight = 100;
    }
    else if (item.id === '33') {
      imageWidth = 500;
      imageHeight = 100;
    }

    return (
      <View style={[styles.imageContainer, { marginLeft: index === 0 ? 0 : 20 }]}>
        <Image source={item.image} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
        <Text style={styles.imageDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'green', fontWeight: 'bold', marginBottom: 20 }}>
        PAKET RESERVASI
      </Text>
      <Text style={{ fontSize: 12, fontStyle: 'italic' }}>Tracking</Text>

      <View style={styles.layersContainer}>
        <View style={styles.layer}>
          <FlatList
            horizontal
            data={data.filter((item) => item.description.includes('Tracking'))}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderImageItem}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
        <Text style={{ fontSize: 12, fontStyle: 'italic' }}>Edukasi</Text>

        <View style={styles.layer}>
          <FlatList
            horizontal
            data={data.filter((item) => item.description.includes('Edukasi'))}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderImageItem}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  flatListContainer: {
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    borderRadius: 20,
  },
  imageDescription: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  layersContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  layer: {
    flex: 1,
  },
});

export default Reservasi;
