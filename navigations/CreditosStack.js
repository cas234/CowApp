import React from 'react';
import  {createStackNavigator} from '@react-navigation/stack';
import Creditos from '../screens/Creditos';// import { Container } from './styles';

const Stack = createStackNavigator()

const CreditosStack = () => {
  return (
<Stack.Navigator>
    <Stack.Screen
    name="Creditos"
    component={Creditos}
    options={{title:"Creditos"}}
    />
</Stack.Navigator>
  );
  
}

export default CreditosStack;