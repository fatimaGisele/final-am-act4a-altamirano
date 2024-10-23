
import  { Init } from './Components/Init';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Navigation } from './Components/Navigation'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider >
    <View style={styles.container}>
     <StatusBar style='light'/>
        <Init/>
    </View>
</SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'pink'
  }
})

 {/* <SafeAreaProvider >
        <View style={styles.container}>
         <StatusBar style='light'/>
            <Init/>
        </View>
    </SafeAreaProvider>*/}
