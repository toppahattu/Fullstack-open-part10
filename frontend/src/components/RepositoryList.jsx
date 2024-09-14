import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const {repositories, loading } = useRepositories();
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handlePress = (id) => {
    navigate(`/${id}`);
  }

  if (loading)  {
    return <Text>loading...</Text>
  }
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;
