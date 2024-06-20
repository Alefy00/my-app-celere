import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando hook useNavigation para navegação
import { styles } from '../styles/HomeScreenStyles'; // Importando estilos para esta tela
import CustomButton from '../components/CustomButton'; // Importando componente de botão personalizado

const HomeScreen = () => {
  const navigation = useNavigation(); // Inicializando a navegação

  return (
    <View style={styles.container}>
      {/* Botão para navegar para a tela de consulta de CEP */}
      <CustomButton
        title="Consulta CEP"
        onPress={() => navigation.navigate('ConsultaCEP')}
      />
      {/* Botão para navegar para a tela de Swiper */}
      <CustomButton
        title="Swiper"
        onPress={() => navigation.navigate('Swiper')}
      />
    </View>
  );
};

export default HomeScreen;
