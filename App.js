import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Reservasi from './src/Reservasi';
import Kuliner from './src/Kuliner';
import WelcomeScreen from './src/WelcomeScreen';


export default function App() {
  return (
    <SafeAreaView>
    
{/* <Reservasi/> */}
<Kuliner/>
{/* <WelcomeScreen/> */}
    </SafeAreaView>
  );
}