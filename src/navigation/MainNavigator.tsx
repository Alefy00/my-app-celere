import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importando o navegador stack nativo
import HomeScreen from '../screens/HomeScreen'; // Importando tela HomeScreen
import ConsultaCEPScreen from '../screens/ConsultaCEPScreen'; // Importando tela ConsultaCEPScreen
import SwiperScreen from '../screens/SwiperScreen'; // Importando tela SwiperScreen

const Stack = createNativeStackNavigator(); // Criando uma instância do navegador stack

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"> 
      <Stack.Screen name="Home" component={HomeScreen} /> 
      <Stack.Screen name="ConsultaCEP" component={ConsultaCEPScreen} /> 
      <Stack.Screen name="Swiper" component={SwiperScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
