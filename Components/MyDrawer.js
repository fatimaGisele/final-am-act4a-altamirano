import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDatePicker from './MyDatePicker';
import UserData from './UserData';
import SignOut from './SignOut';





export default function MyDrawer() {

    const Drawer = createDrawerNavigator();

  return (
    
      <Drawer.Navigator>
        <Drawer.Screen name='Elige una fecha' component={MyDatePicker}/>
        <Drawer.Screen name='Mis Datos' component={UserData}/>
        <Drawer.Screen name='Cerrar Sesion' component={SignOut}/>
      </Drawer.Navigator>

  );
}
