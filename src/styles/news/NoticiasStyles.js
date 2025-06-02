import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingBottom: 20,
  },
  climatizacaoBox: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  tituloClimatizacao: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#222',
  },
  textoClimatizacao: {
    color: '#555',
    marginBottom: 8,
  },
  link: {
    color: '#3366FF',
    fontWeight: 'bold',
  },
  tituloSecao: {
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  imagemNoticia: {
    width: '90%',
    height: 180,
    borderRadius: 10,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});
