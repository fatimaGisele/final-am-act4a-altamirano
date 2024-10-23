import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Init } from "./Init";
import { SingIn } from "./SingIn"


export default function Navigation(){

    const stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Init" component={Init}/>
                <stack.Screen name="SingIn" component={SingIn}/>
                <stack.Screen />
            </stack.Navigator>
        </NavigationContainer>
    )
}