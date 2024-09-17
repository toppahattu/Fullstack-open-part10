import React from 'react';
import { FlatList, View } from "react-native";
import { useParams } from "react-router-native";

import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import Text from "./Text";
import useReviews from "../hooks/useReviews";
import useSingleRepository from "../hooks/useSingleRepository";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useSingleRepository({ id });
  const { reviews, loadingReviews } = useReviews({ id });

  const ListHeaderWithSeparator = () => (
    <View>
      <RepositoryItem item={repository} showButton={true} />
      <ItemSeparator />
    </View>
  );

  if (loading || loadingReviews) {
    return <Text>loading...</Text>;
  }
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={<ItemSeparator />}
      renderItem={({ item }) => (
        <ReviewItem review={item} />
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={ListHeaderWithSeparator}
    />
  );
};

export default SingleRepository;