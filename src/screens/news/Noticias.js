import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import CardClima from '../../components/CardClima';
import { styles } from '../../styles/news/NoticiasStyles';

export default function News() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scroll}>
        <CardClima />

        <View style={styles.climatizacaoBox}>
          <Text style={styles.tituloClimatizacao}>Área de climatização</Text>
          <Text style={styles.textoClimatizacao}>
            Nossas cores são baseadas nas cores das zonas da SpTrans
          </Text>
          <TouchableOpacity>
            <Text style={styles.link}>Por que das cores?</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}