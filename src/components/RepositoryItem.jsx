import { View, StyleSheet, Image } from 'react-native';
import SubHeading from './SubHeading'
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
  },
  innerContainer: {
    display: 'flex',
    paddingVertical: 5,
    maxWidth: '75%'
  },
  itemContainer: {
    padding: 5
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 7,
    alignSelf: 'flex-start',
  },
  upperPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  lowerPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
    marginTop: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.itemContainer}>
            <SubHeading>{item.fullName}</SubHeading>
          </View>
          <View style={styles.itemContainer}>
            <Text color='textSecondary'>{item.description}</Text>
          </View>
          <View style={styles.languageContainer}>
            <Text color='appBarText'>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.innerContainer}>
          <SubHeading>{item.stargazersCount > 999 ? Number((item.stargazersCount / 1000).toFixed(1)) + 'k' : item.stargazersCount}</SubHeading>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.innerContainer}>
          <SubHeading>{item.forksCount > 999 ? Number((item.forksCount / 1000).toFixed(1)) + 'k' : item.forksCount}</SubHeading>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.innerContainer}>
          <SubHeading>{item.reviewCount > 999 ? Number((item.reviewCount / 1000).toFixed(1)) + 'k' : item.reviewCount}</SubHeading>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.innerContainer}>
          <SubHeading>{item.ratingAverage > 999 ? Number((item.ratingAverage / 1000).toFixed(1)) + 'k' : item.ratingAverage}</SubHeading>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>      
    </View>
  );
};

export default RepositoryItem;