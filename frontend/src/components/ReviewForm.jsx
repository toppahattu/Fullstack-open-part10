import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import theme from "../theme";
import useCreateReview from "../hooks/useCreateReview";


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

const ReviewForm = () => {
  const [makeReview, result] = useCreateReview();
  const navigate = useNavigate();

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  };

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data = await makeReview({ ownerName, repositoryName, rating, text });
      if (data?.createReview?.id) {
        console.log('review created, id: ', data.createReview.id);
        navigate(`/repository/${data.createReview.repositoryId}`);
      } else {
        console.log('review creation failed')
      }
    } catch (e) {
      console.log('review creation error: ', e);
    }
  };

  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required('Repository owner name is required')
      .trim(),
    repositoryName: yup
      .string()
      .required('Repository name is required')
      .trim(),
    rating: yup
      .number()
      .integer('Rating must be an integer')
      .min(0, 'Rating must be between 0 and 100')
      .max(100, 'Rating must be between 0 and 100')
      .required('Rating is required'),
    text: yup
      .string()
      .max(2000, 'Review text must be at most 2000 characters')
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

  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Repository owner name'
          value={formik.values.ownerName}
          onChangeText={formik.handleChange('ownerName')}
          style={[
            styles.inputText,
            formik.touched.ownerName && formik.errors.ownerName && styles.inputTextError
          ]}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <Text color='error'>{formik.errors.ownerName}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Repository name'
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange('repositoryName')}
          style={[
            styles.inputText,
            formik.touched.repositoryName && formik.errors.repositoryName && styles.inputTextError
          ]}
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text color='error'>{formik.errors.repositoryName}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Rating between 0 and 100'
          value={formik.values.rating}
          onChangeText={formik.handleChange('rating')}
          style={[
            styles.inputText,
            formik.touched.rating && formik.errors.rating && styles.inputTextError
          ]}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text color='error'>{formik.errors.rating}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Review'
          value={formik.values.text}
          onChangeText={formik.handleChange('text')}
          multiline
          textAlignVertical="top"
          style={[
            styles.inputText,
            formik.touched.text && formik.errors.text && styles.inputTextError
          ]}
        />
        {formik.touched.text && formik.errors.text && (
          <Text color='error'>{formik.errors.text}</Text>
        )}
      </View>
      <View style={styles.submitContainer}>
        <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
          <Text color='appBarText' fontWeight='bold'>Create a review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReviewForm;