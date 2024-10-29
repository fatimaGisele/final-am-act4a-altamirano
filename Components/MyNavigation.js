import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Init  from './Init';
import  SingIn  from './SingIn';




export function MyNavigation(){

    const stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Init" component={Init} options={{headerShown:false}}/>
                <stack.Screen name="SingIn" component={SingIn} options={{headerShown:false}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
