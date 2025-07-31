import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CloseEye from '../../assets/svgs/Close_Eye.svg';
import OpenEye from '../../assets/svgs/Open_Eye.svg';
import GoogleIcon from '../../assets/svgs/google_icon.svg';
import api from '../../api/api';
import { styles } from '../../styles/login/LoginStyles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [campoInvalido, setCampoInvalido] = useState({ email: false, senha: false });

  const alternarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const validarEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    const emailVazio = email.trim() === '';
    const senhaVazia = senha.trim() === '';
    const emailInvalido = !validarEmail(email);

    if (emailVazio || senhaVazia) {
      setCampoInvalido({ email: emailVazio, senha: senhaVazia });
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (emailInvalido) {
      setCampoInvalido({ email: true, senha: false });
      Alert.alert('Erro', 'Digite um e-mail válido!');
      return;
    }

    try {
      const response = await api.post('/usuario/login', { email, senha });
      Alert.alert('Login', 'Sucesso!');
      navigation.navigate('Noticias');
    } catch (error) {
      Alert.alert('Erro', error.response?.data || 'Erro no login');
    }
  };

  return (
    <LinearGradient colors={['#bccbed', '#50417A']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.subtitulo}>Entre com seu email e sua senha</Text>

        <TextInput
          style={[styles.input, campoInvalido.email && styles.inputErro]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setCampoInvalido(prev => ({ ...prev, email: false }));
          }}
          placeholderTextColor="#888"
          maxLength={100}
          keyboardType="email-address"
        />

        <View style={[styles.senhaContainer, campoInvalido.senha && styles.inputErro]}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            value={senha}
            onChangeText={(text) => {
              setSenha(text);
              setCampoInvalido(prev => ({ ...prev, senha: false }));
            }}
            secureTextEntry={!mostrarSenha}
            placeholderTextColor="#888"
            maxLength={100}
          />
          <TouchableOpacity onPress={alternarVisibilidadeSenha}>
            {mostrarSenha ? <OpenEye width={24} height={24} /> : <CloseEye width={24} height={24} />}
          </TouchableOpacity>
        </View>

        <View style={styles.linhaLembrete}>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxVazio} />
            <Text style={styles.checkboxTexto}>Lembre me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Noticias')}>
          <Text style={styles.visitorButton}>Entrar como visitante</Text>
        </TouchableOpacity>

        <View style={styles.divisor}>
          <View style={styles.linha} />
          <Text style={styles.ou}>Ou login com</Text>
          <View style={styles.linha} />
        </View>

        <TouchableOpacity
  style={styles.googleBtn}
  onPress={() => navigation.navigate('Noticias')}
>
  <Text style={{ color: '#3366FF', fontWeight: 'bold', fontFamily: 'Rubik', fontSize: 15 }}>
    Entrar como visitante
  </Text>
</TouchableOpacity>


        <View style={styles.registroContainer}>
          <Text style={styles.registroTexto}>Não tem uma conta ainda? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.linkRegistro}>Registre-se</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footer}>Logue para continuar</Text>
    </LinearGradient>
  );
}
