import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import About from './src/About';
import Agro from './src/Agro';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
<About/>
{/* <Agro/> */}
    </SafeAreaView>
  );
}
