import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Init  from './Init';
import SignIn from './SignIn';
import Register from './Register';
import ApodCard from './Main';
import UserData from './UserData';
import SignOut from './SignOut';
import MyDatePicker from './MyDatePicker';
import EventOfADay from './EventOfADay';

export function MyNavigation(){

    const stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="MyDatePicker" component={MyDatePicker} options={{headerShown:false}}/>
                <stack.Screen name="Init" component={Init} options={{headerShown:false}}/>
                <stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
                <stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                <stack.Screen name="ApodCard" component={ApodCard} options={{headerShown:false}}/>
                <stack.Screen name="UserData" component={UserData} options={{headerShown:false}}/>
                <stack.Screen name="SignOut" component={SignOut} options={{headerShown:false}}/>
                <stack.Screen name="EventOfADay" component={EventOfADay} options={{headerShown:false}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
