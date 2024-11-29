import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Init  from './Init';
import SignIn from './SignIn';
import Register from './Register';
import ApodCard from './Main';
import UserData from './UserData';
import SignOut from './SignOut';



export function MyNavigation(){

    const stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Init" component={Init}/>
                <stack.Screen name="SignIn" component={SignIn} />
                <stack.Screen name="Register" component={Register}/>
                <stack.Screen name="ApodCard" component={ApodCard}/>
                <stack.Screen name="UserData" component={UserData}/>
                <stack.Screen name="SignOut" component={SignOut}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
