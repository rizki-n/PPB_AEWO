import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView, Text} from 'react-native';
import Button from './button';
import Header from './header';

class Home extends Component {
    render() {
        return (
            
            <SafeAreaView style={{ flex:1, backgroundColor: "white"}}>
            <Header/>

            <View style={{flex:10, backgroundColor:"lightgray"}}>
                
                <StatusBar hidden={false}/>
                <Text style={styles.subtxt}>
                Tempatnya berwisata sambil belajar dengan{'\n'}harga terjangkau.
                </Text>
                <Text style={styles.txt}>
                    Fasilitas Yang Tersedia
                </Text>
                <Button/>
                <Text style={styles.txt}>
                    Overview
                </Text>
            </View>

            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({

    txt:{
        fontSize: 20,
        fontWeight:"bold",
        paddingHorizontal: 10
    },
    subtxt:{
        paddingHorizontal: 10,
        marginVertical: 10
    }

})

export default Home;
