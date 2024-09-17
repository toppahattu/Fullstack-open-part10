import React from 'react';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-native';

import RepositoryListContainer from './RepositoryListContainer';
import Text from './Text';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const [ordering, setOrdering] = useState("latest");
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const orders = {
    latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    highest: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    lowest: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  };
  const variables = { ...orders[ordering], searchKeyword: debouncedFilter };
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
    <RepositoryListContainer
      repositoryNodes={repositoryNodes}
      handlePress={handlePress}
      ordering={ordering}
      setOrdering={setOrdering}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default RepositoryList;
