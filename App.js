
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { MyNavigation } from './Components/MyNavigation';
import { StatusBar } from 'expo-status-bar';

//const stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider  style={styles.container}>
     <StatusBar style='light'/>
        <MyNavigation/>
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
