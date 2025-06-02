import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  subtitulo: {
    color: '#666',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  inputSenha: {
    flex: 1,
    paddingVertical: 12,
  },
  inputErro: {
    borderColor: 'red',
    borderWidth: 1,
  },
  linhaLembrete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxVazio: {
    width: 16,
    height: 16,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#999',
    marginRight: 6,
  },
  checkboxTexto: {
    fontSize: 14,
    color: '#444',
  },
  link: {
    color: '#3366FF',
    fontSize: 14,
  },
  botao: {
    backgroundColor: '#3366FF',
    width: '100%',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  ou: {
    marginHorizontal: 8,
    color: '#888',
  },
  googleBtn: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  registroContainer: {
    flexDirection: 'row',
  },
  registroTexto: {
    color: '#444',
  },
  linkRegistro: {
    color: '#3366FF',
    fontWeight: 'bold',
  },
  footer: {
    color: '#ccc',
    marginTop: 16,
  },
});
