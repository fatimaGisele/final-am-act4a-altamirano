
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { MyNavigation } from './Components/MyNavigation';

export default function App() {

  return (
    <SafeAreaProvider>
        <MyNavigation/>
    </SafeAreaProvider>
  );
}


