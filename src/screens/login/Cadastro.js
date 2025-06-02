import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../api/api';
import CloseEye from '../../assets/svgs/Close_Eye.svg';
import OpenEye from '../../assets/svgs/Open_Eye.svg';
import { styles } from "../../styles/login/CadastroStyles"; 

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState({
    nome: false,
    email: false,
    telefone: false,
    senha: false,
  });

  const validarEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleCadastro = async () => {
    const nomeVazio = nome.trim() === '';
    const emailVazio = email.trim() === '';
    const telefoneVazio = telefone.trim() === '';
    const senhaVazia = senha.trim() === '';
    const emailInvalido = !validarEmail(email);

    if (nomeVazio || emailVazio || telefoneVazio || senhaVazia) {
      setErros({
        nome: nomeVazio,
        email: emailVazio || emailInvalido,
        telefone: telefoneVazio,
        senha: senhaVazia,
      });
      Alert.alert('Erro', 'Preencha todos os campos corretamente!');
      return;
    }

    if (emailInvalido) {
      setErros((prev) => ({ ...prev, email: true }));
      Alert.alert('Erro', 'Digite um e-mail válido!');
      return;
    }

    try {
      await api.post('/usuario/salvar', { nome, email, telefone, senha });
      Alert.alert('Cadastro', 'Usuário cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', error.response?.data || 'Erro no cadastro');
    }
  };

  return (
    <LinearGradient colors={['#bccbed', '#50417A']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastro</Text>
        <Text style={styles.subtitulo}>Crie sua conta para continuar</Text>

        <TextInput
          style={[styles.input, erros.nome && styles.inputErro]}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => {
            setNome(text);
            setErros(prev => ({ ...prev, nome: false }));
          }}
          placeholderTextColor="#888"
          maxLength={100}
        />

        <TextInput
          style={[styles.input, erros.email && styles.inputErro]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErros(prev => ({ ...prev, email: false }));
          }}
          placeholderTextColor="#888"
          keyboardType="email-address"
          maxLength={100}
        />

        <TextInput
          style={[styles.input, erros.telefone && styles.inputErro]}
          placeholder="Telefone"
          value={telefone}
          onChangeText={(text) => {
            setTelefone(text);
            setErros(prev => ({ ...prev, telefone: false }));
          }}
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          maxLength={100}
        />

        <View style={[styles.senhaContainer, erros.senha && styles.inputErro]}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            value={senha}
            onChangeText={(text) => {
              setSenha(text);
              setErros(prev => ({ ...prev, senha: false }));
            }}
            secureTextEntry={!mostrarSenha}
            placeholderTextColor="#888"
            maxLength={100}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? <OpenEye width={24} height={24} /> : <CloseEye width={24} height={24} />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.registroContainer}>
          <Text style={styles.registroTexto}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkRegistro}>Voltar para login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footer}>Preencha seus dados para se cadastrar</Text>
    </LinearGradient>
  );
}
