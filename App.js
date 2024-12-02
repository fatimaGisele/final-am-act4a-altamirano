
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyNavigation } from './Components/MyNavigation';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar style='light'/>
      <MyNavigation/>
       
    </SafeAreaProvider>
  );
}


