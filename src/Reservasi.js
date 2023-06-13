import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';

const Reservasi = () => {
  const data = [
    { id: '1', image: require('../assets/1.png') },
    { id: '2', image: require('../assets/2.png') },
    { id: '3', image: require('../assets/3.png') },
  ];

  const renderImageItem = ({ item, index }) => {
    return (
      <View style={[styles.imageContainer, { marginLeft: index === 0 ? 0 : 20 }]}>
        <Image source={item.image} style={styles.image} />
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
            data={data}
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
            data={data}
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
    width: 350,
    height: 180,
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
