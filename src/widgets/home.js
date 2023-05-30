import React, { Component } from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';


class Home extends Component {
    render() {
        return (
            
            <SafeAreaView style={{ flex:1, backgroundColor: "white"}}>


            <View style={{flex:10, backgroundColor:"green"}}>
                <StatusBar hidden={false}/>
                
            </View>

            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({})

export default Home;
