import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Cadastro from '../screens/login/Cadastro';
import Noticias from '../screens/news/Noticias';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
      <Stack.Screen name="Noticias" component={Noticias} options={{ headerShown: false }} /> 
    </Stack.Navigator>
  );
}
