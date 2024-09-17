import React from 'react';
import { Pressable, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import formStyles from "../themes/formStyles";
import useCreateUser from "../hooks/useCreateUser";
import useSignIn from "../hooks/useSignIn";

const SignUpForm = () => {
  const [makeUser, result] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
  };

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await makeUser({ username, password });
      if (data?.createUser?.id) {
        console.log('user created, id: ', data.createUser.id);
        try {
          const loginData = await signIn({ username, password });
          if (loginData?.authenticate?.accessToken) {
            console.log('login success, accessToken: ', loginData.authenticate.accessToken);
            navigate('/');
          } else {
            console.log('login failure: no access token received')
          }
        } catch (e) {
          console.log('login failure', e);
        }
      } else {
        console.log('user creation failed')
      }
    } catch (e) {
      console.log('user creation error: ', e);
    }
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required')
      .min(5, 'Username must be at least ${min} characters long')
      .max(30, 'Username can not be longer than ${max} characters')
      .trim(),
    password: yup
      .string()
      .required('Password is required')
      .min(5, 'Password must be at least ${min} characters long')
      .max(50, 'Password can not be longer than ${max} characters')
      .trim(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required')
      .trim(),
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
          style={[formStyles.inputText, formik.errors.username && formStyles.inputTextError]}
          onChangeText={formik.handleChange('username')}
          value={formik.values.username}
          placeholder='Username'
        />
        {formik.errors.username && <Text color='error'>{formik.errors.username}</Text>}
      </View>
      <View style={formStyles.inputContainer}>
        <TextInput
          style={[formStyles.inputText, formik.errors.password && formStyles.inputTextError]}
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
          placeholder='Password'
          secureTextEntry
        />
        {formik.errors.password && <Text color='error'>{formik.errors.password}</Text>}
      </View>
      <View style={formStyles.inputContainer}>
        <TextInput
          style={[formStyles.inputText, formik.errors.passwordConfirmation && formStyles.inputTextError]}
          onChangeText={formik.handleChange('passwordConfirmation')}
          value={formik.values.passwordConfirmation}
          placeholder='Password confirmation'
          secureTextEntry
        />
        {formik.errors.passwordConfirmation && <Text color='error'>{formik.errors.passwordConfirmation}</Text>}
      </View>
      <Pressable onPress={formik.handleSubmit} style={formStyles.submitContainer}>
        <View style={formStyles.submitButton}>
          <Text color='textLight'>Sign up</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignUpForm;