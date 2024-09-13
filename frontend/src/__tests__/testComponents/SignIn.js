import { useFormik } from 'formik';
import { Pressable, Text, TextInput, View } from 'react-native';

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      await onSubmit({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <View>
      <View>
        <TextInput
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
      </View>
      <View>
        <TextInput      
          secureTextEntry
          placeholder='Password'
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
      </View>      
      <View>
        <Pressable onPress={formik.handleSubmit}>
          <Text>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const SignIn = ({ onSubmit }) => {
  return (
    <SignInContainer onSubmit={onSubmit} />
  );
}

export default SignIn;