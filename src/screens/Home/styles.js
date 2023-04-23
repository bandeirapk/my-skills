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
  greeting: {
    fontSize: 16,
    fontWeight: '600',
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
  containerCounterSkills: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 4,
    borderBottomColor: '#FFF',

    paddingBottom: 20,

    marginTop: 50,
  },
  counterSkills: {
    borderRadius: 14,

    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',

    backgroundColor: '#A370F7',
  },
});
