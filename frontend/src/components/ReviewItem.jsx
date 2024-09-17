import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';
import theme from '../themes/theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 5,
    maxWidth: '85%'
  },
  itemContainer: {
    paddingVertical: 2,
    paddingHorizontal: 9
  },
  textContainer: {
    paddingHorizontal: 9,
    marginTop: 10
  },
  reviewContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.reviewContainer}>
          <Text color='primary' fontWeight='bold'>{review.rating}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.itemContainer}>
          <Text fontWeight='bold'>{review.user.username}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text color='textSecondary'>{formattedDate}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;