import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Reservasi from './src/Reservasi';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
<Reservasi/>

    </SafeAreaView>
  );
}