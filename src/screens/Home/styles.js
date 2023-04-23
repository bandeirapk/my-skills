import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 70,
    paddingHorizontal: 30,

    backgroundColor: '#121015',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    marginTop: Platform.OS === 'ios' ? 15 : 20,

    borderRadius: 7,

    padding: 15,

    color: '#FFF',
    fontSize: 18,

    backgroundColor: '#1F1E25',
  },
});
