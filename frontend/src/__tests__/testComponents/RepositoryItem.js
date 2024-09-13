import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem">
      <Text testID="fullName">{item.fullName}</Text>
      <Text testID="description">{item.description}</Text>
      <Text testID="language">{item.language}</Text>
      <Text testID="stargazersCount">{item.stargazersCount}</Text>
      <Text testID="forksCount">{item.forksCount}</Text>
      <Text testID="reviewCount">{item.reviewCount}</Text>
      <Text testID="ratingAverage">{item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;