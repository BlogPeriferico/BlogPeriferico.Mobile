import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { styles } from '../styles/components/CardClimaStyles';
import { zonasClima } from '../data/zonasClima';

const API_KEY = '56fd2180ff9c0389b8ebc9c566b4d563';

const zonas = Object.entries(zonasClima).map(([nome, dados]) => ({
  nome: `Zona $ x {nome}`,
  bairro: dados.bairro,
  lat: dados.lat,
  lon: dados.lon,
  imagem: `https://blogperiferico.blob.core.windows.net/zonas/zona_${nome.toLowerCase()}.png`,
}));

export default function CardClima() {
  const [indice, setIndice] = useState(0);
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const zonaAtual = zonas[indice];

  useEffect(() => {
    const buscarClima = async () => {
      setCarregando(true);
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${zonaAtual.lat}&lon=${zonaAtual.lon}&appid=${API_KEY}&units=metric&lang=pt_br`
        );
        setClima(res.data);
      } catch (err) {
        console.error('Erro ao buscar clima:', err);
      } finally {
        setCarregando(false);
      }
    };
    buscarClima();
  }, [indice]);

  const proximo = () => setIndice((prev) => (prev + 1) % zonas.length);
  const anterior = () => setIndice((prev) => (prev - 1 + zonas.length) % zonas.length);

  const formatarData = (timestamp) => {
    const data = new Date(timestamp * 1000);
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' });
    const dia = data.toLocaleDateString('pt-BR');
    const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return { diaSemana, dia, hora };
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: zonaAtual.imagem }} style={styles.imagem} />

      {carregando ? (
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      ) : clima ? (
        <View style={styles.overlay}>
          <Text style={styles.localizacao}>📍 {zonaAtual.nome}</Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png` }}
            style={styles.icone}
          />
          <Text style={styles.temp}>{Math.round(clima.main.temp)}°C</Text>
          <Text style={styles.info}>{formatarData(clima.dt).diaSemana}</Text>
          <Text style={styles.info}>{formatarData(clima.dt).dia} - {formatarData(clima.dt).hora}</Text>
        </View>
      ) : (
        <Text style={styles.erro}>Erro ao carregar clima</Text>
      )}

      <TouchableOpacity style={styles.anterior} onPress={anterior}>
        <Text style={styles.seta}>{'‹'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.proximo} onPress={proximo}>
        <Text style={styles.seta}>{'›'}</Text>
      </TouchableOpacity>
    </View>
  );
}
