import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import ItemSeparator from './ItemSeparator';
import OrderingMenu from './OrderingMenu';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const [ordering, setOrdering] = useState("latest");
  const orders = {
    latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    highest: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    lowest: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  };
  const variables = orders[ordering];
  const {repositories, loading } = useRepositories(variables);
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handlePress = (id) => {
    navigate(`/repository/${id}`);
  };

  if (loading)  {
    return <Text>loading...</Text>
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={<ItemSeparator />}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={<OrderingMenu ordering={ordering} setOrdering={setOrdering} />}
    />
  );
};

export default RepositoryList;
