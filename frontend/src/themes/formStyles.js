import { StyleSheet } from 'react-native';
import theme from './theme';

const formStyles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: theme.colors.appBar,
    padding: 10,
    borderRadius: 4,
  },
  inputTextError: {
    borderColor: theme.colors.error,
  },
  submitContainer: {
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
});

export default formStyles;
