// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCfIL_Mv-QdkVG1pd15RMRrR-nAqSVx2fM",
  authDomain: "mynasaapodapp.firebaseapp.com",
  projectId: "mynasaapodapp",
  storageBucket: "mynasaapodapp.firebasestorage.app",
  messagingSenderId: "905800868571",
  appId: "1:905800868571:web:64430f84612a1526aea2fe",
  measurementId: "G-9KCTC7KM7G"
};

/*[2024-11-26T00:51:14.812Z]  @firebase/auth: Auth (11.0.1):
You are initializing Firebase Auth for React Native without providing
AsyncStorage. Auth state will default to memory persistence and will not
persist between sessions. In order to persist auth state, install the package
"@react-native-async-storage/async-storage" and provide it to
initializeAuth:

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

[Error: You attempted to use a firebase module that's not installed on your Android project by calling firebase.app().

Ensure you have:

1) imported the 'io.invertase.firebase.app.ReactNativeFirebaseAppPackage' module in your 'MainApplication.java' file.

2) Added the 'new ReactNativeFirebaseAppPackage()' line inside of the RN 'getPackages()' method list.
*/