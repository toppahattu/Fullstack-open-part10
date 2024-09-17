import React from 'react';
import { Pressable, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import formStyles from "../themes/formStyles";
import useCreateReview from "../hooks/useCreateReview";

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
    <View style={formStyles.container}>
      <View style={formStyles.inputContainer}>
        <TextInput
          placeholder='Repository owner name'
          value={formik.values.ownerName}
          onChangeText={formik.handleChange('ownerName')}
          style={[
            formStyles.inputText,
            formik.touched.ownerName && formik.errors.ownerName && formStyles.inputTextError
          ]}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <Text color='error'>{formik.errors.ownerName}</Text>
        )}
      </View>
      <View style={formStyles.inputContainer}>
        <TextInput
          placeholder='Repository name'
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange('repositoryName')}
          style={[
            formStyles.inputText,
            formik.touched.repositoryName && formik.errors.repositoryName && formStyles.inputTextError
          ]}
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text color='error'>{formik.errors.repositoryName}</Text>
        )}
      </View>
      <View style={formStyles.inputContainer}>
        <TextInput
          placeholder='Rating between 0 and 100'
          value={formik.values.rating}
          onChangeText={formik.handleChange('rating')}
          style={[
            formStyles.inputText,
            formik.touched.rating && formik.errors.rating && formStyles.inputTextError
          ]}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text color='error'>{formik.errors.rating}</Text>
        )}
      </View>
      <View style={formStyles.inputContainer}>
        <TextInput
          placeholder='Review'
          value={formik.values.text}
          onChangeText={formik.handleChange('text')}
          multiline
          verticalAlign="top"
          style={[
            formStyles.inputText,
            formik.touched.text && formik.errors.text && formStyles.inputTextError
          ]}
        />
        {formik.touched.text && formik.errors.text && (
          <Text color='error'>{formik.errors.text}</Text>
        )}
      </View>
      <View style={formStyles.submitContainer}>
        <Pressable onPress={formik.handleSubmit} style={formStyles.submitButton}>
          <Text color='appBarText' fontWeight='bold'>Create a review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReviewForm;