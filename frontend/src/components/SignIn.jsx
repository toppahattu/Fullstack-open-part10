import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

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

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const [signIn, result] = useSignIn();
  if (result.loading)  {
    return <Text>loading...</Text>
  }

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try{
      const data = await signIn({ username, password });
      if (data?.authenticate?.accessToken) {
        console.log('login success', data);
        navigate('/');
      } else {
        console.log('login failure: no access token received')
      }
    } catch (e) {
      console.log('login failure', e);
    }
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          style={[
            styles.inputText,
            formik.touched.username && formik.errors.username && styles.inputTextError
          ]}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color='error'>{formik.errors.username}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput      
          secureTextEntry
          placeholder='Password'
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          style={[
            styles.inputText,
            formik.touched.password && formik.errors.password && styles.inputTextError
          ]}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color='error'>{formik.errors.password}</Text>
        )}
      </View>      
      <View style={styles.submitContainer}>
        <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
          <Text color='appBarText' fontWeight='bold'>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;