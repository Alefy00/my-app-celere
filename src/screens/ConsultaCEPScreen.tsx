import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import axios from 'axios'; // Importando axios para fazer requisições HTTP
import Modal from 'react-native-modal'; // Importando componente modal
import { styles } from '../styles/ConsultaCEPSreenStyles'; // Importando estilos para esta tela
import CustomButton from '../components/CustomButton'; // Importando componente de botão personalizado


const ConsultaCEPScreen = () => {
  const [cep, setCep] = useState(''); // Estado para armazenar o CEP digitado
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [address, setAddress] = useState(null); // Estado para armazenar os dados do endereço

  // Função para lidar com a consulta do CEP
  const handleConsultaCEP = async () => {
    if (cep === '') {
      // Se o campo CEP estiver vazio, exibe um alerta
      Alert.alert('Erro', 'Preencha o campo CEP.');
      return;
    }

    try {
      // Tentativa de buscar os dados do endereço pela API utilizando axios
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        // Se a API retornar um erro indicando CEP não encontrado, exibe um alerta
        Alert.alert('Erro', 'CEP não encontrado.');
      } else {
        // Se bem-sucedido, atualiza o estado do endereço com os dados retornados e exibe o modal
        setAddress(response.data);
        setModalVisible(true);
      }
    } catch (error) {
      // Captura de erros que possam ocorrer durante a requisição à API
      Alert.alert('Erro', 'Erro ao consultar o CEP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Informe um CEP:</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"  // Define o teclado como numérico para entrada de CEP
      />
      <CustomButton title="Consultar" onPress={handleConsultaCEP} /> 
   

      <Modal isVisible={modalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Endereço: {address?.logradouro}</Text>
          <Text style={styles.modalText}>Bairro: {address?.bairro}</Text>
          <Text style={styles.modalText}>Cidade: {address?.localidade}</Text>
          <Text style={styles.modalText}>UF: {address?.uf}</Text>
          <CustomButton title="Fechar" onPress={() => setModalVisible(false)} /> 
        </View>
      </Modal>
    </View>
  );
};

export default ConsultaCEPScreen;
