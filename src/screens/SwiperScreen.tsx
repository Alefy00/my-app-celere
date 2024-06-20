import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper'; // Importando o componente Swiper
import { styles } from '../styles/SwiperScreenStyles'; // Importando estilos para esta tela

const SwiperScreen = () => (
  <Swiper style={styles.wrapper} showsButtons>
    {/* Slide 1 */}
    <View style={styles.slide1}>
      <Text style={styles.text}>Celere</Text>
    </View>
    {/* Slide 2 */}
    <View style={styles.slide2}>
      <Text style={styles.text}>Alefy Xavier</Text>
      <Text style={styles.text}>alefy_sx@hotmail.com</Text>
      <Text style={styles.text}>(38) 998451799</Text>
    </View>
    {/* Slide 3 */}
    <View style={styles.slide3}>
      <Text style={styles.text}>Obrigado por usar o App!</Text>
    </View>
  </Swiper>
);

export default SwiperScreen;
