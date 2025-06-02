import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    zIndex: 10,
  },
  headerContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#001C30',
  },
  inputBusca: {
    flex: 1,
    height: 40,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#000',
  },
  fullscreenModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height,
    zIndex: 999,
    flexDirection: 'row',
  },
  modalLateral: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 10,
    zIndex: 1000,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 999,
  },
  modalItem: {
    fontSize: 18,
    marginVertical: 10,
    color: '#001C30',
  },
  botaoFechar: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
});
