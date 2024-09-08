import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center'
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
  submitContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
});

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          style={styles.inputText}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput      
          secureTextEntry
          placeholder='Password'
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          style={styles.inputText}
        />
      </View>      
      <View style={styles.submitContainer}>
        <Pressable onPress={formik.handleSubmit}>
          <Text color='appBarText' fontWeight='bold'>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;