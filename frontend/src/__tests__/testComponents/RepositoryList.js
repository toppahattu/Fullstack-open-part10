import { FlatList } from 'react-native';

import RepositoryItem from './RepositoryItem';

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];
  
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = ({ repositories }) => {
  return (
    <RepositoryListContainer repositories={repositories} />
  );
};

export default RepositoryList;