import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import formStyles from '../themes/formStyles';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn, result] = useSignIn();  
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const { username, password } = values;

    try{
      const data = await signIn({ username, password });
      if (data?.authenticate?.accessToken) {
        console.log('login success, accessToken: ', data.authenticate.accessToken);
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

  if (result.loading)  {
    return <Text>loading...</Text>
  }

  return (
    <View style={formStyles.container}>
      <View style={formStyles.inputContainer}>
        <TextInput
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          style={[
            formStyles.inputText,
            formik.touched.username && formik.errors.username && formStyles.inputTextError
          ]}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color='error'>{formik.errors.username}</Text>
        )}
      </View>
      <View style={formStyles.inputContainer}>
        <TextInput      
          secureTextEntry
          placeholder='Password'
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          style={[
            formStyles.inputText,
            formik.touched.password && formik.errors.password && formStyles.inputTextError
          ]}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color='error'>{formik.errors.password}</Text>
        )}
      </View>      
      <View style={formStyles.submitContainer}>
        <Pressable style={formStyles.submitButton} onPress={formik.handleSubmit}>
          <Text color='appBarText' fontWeight='bold'>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;