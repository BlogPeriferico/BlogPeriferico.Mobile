import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
    margin: 16,
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 16,
  },
  localizacao: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  icone: {
    width: 60,
    height: 60,
  },
  temp: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  info: {
    color: '#eee',
    fontSize: 14,
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: '45%',
  },
  erro: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  anterior: {
    position: 'absolute',
    left: 8,
    top: '45%',
    padding: 10,
    zIndex: 10,
  },
  proximo: {
    position: 'absolute',
    right: 8,
    top: '45%',
    padding: 10,
    zIndex: 10,
  },
  seta: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
