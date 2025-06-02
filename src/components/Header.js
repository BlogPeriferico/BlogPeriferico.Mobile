import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/components/HeaderStyles';

const { width } = Dimensions.get('window');

export default function Header() {
  const [buscando, setBuscando] = useState(false);
  const [busca, setBusca] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarOverlay, setMostrarOverlay] = useState(false);

  const slideAnim = useRef(new Animated.Value(-width)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;

  const abrirMenu = () => {
    setMenuAberto(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setMostrarOverlay(true);
      Animated.timing(overlayAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  };

  const fecharMenu = () => {
    Animated.timing(overlayAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start(() => {
      setMostrarOverlay(false);
    });

    Animated.timing(slideAnim, {
      toValue: -width,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setMenuAberto(false);
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={abrirMenu}>
          <Ionicons name="menu" size={28} color="#001C30" />
        </TouchableOpacity>

        {buscando ? (
          <TextInput
            value={busca}
            onChangeText={setBusca}
            placeholder="Buscar..."
            style={styles.inputBusca}
            placeholderTextColor="#555"
            autoFocus
          />
        ) : (
          <Text style={styles.titulo}>BlogPeriferico</Text>
        )}

        <TouchableOpacity onPress={() => setBuscando(!buscando)}>
          <Ionicons name={buscando ? 'close' : 'search'} size={24} color="#001C30" />
        </TouchableOpacity>
      </View>

      {menuAberto && (
        <View style={styles.fullscreenModal}>
          {/* Menu lateral à esquerda */}
          <Animated.View
            style={[styles.modalLateral, { transform: [{ translateX: slideAnim }] }]}
          >
            <TouchableOpacity style={styles.botaoFechar} onPress={fecharMenu}>
              <Ionicons name="close" size={28} color="#001C30" />
            </TouchableOpacity>

            <Text style={styles.modalItem}>Perfil</Text>
            <Text style={styles.modalItem}>Notícias</Text>
            <Text style={styles.modalItem}>Sair</Text>
          </Animated.View>

          {/* Overlay aparece após a animação */}
          {mostrarOverlay && (
            <Animated.View
              style={[
                styles.modalOverlay,
                {
                  opacity: overlayAnim,
                },
              ]}
            >
              <Pressable style={{ flex: 1 }} onPress={fecharMenu} />
            </Animated.View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}
