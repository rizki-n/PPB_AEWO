import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Button = () => {
    return (
        <View>
            <View style={{flexDirection:"row", alignItems:"center", padding:10}}>
                <FontAwesome5 name={"home"} color="black" size={30}/>
                

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Button;
