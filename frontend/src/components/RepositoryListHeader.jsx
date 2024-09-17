import React from 'react';
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import OrderingMenu from "./OrderingMenu";

const RepositoryListHeader = ({ ordering, setOrdering, filter, setFilter }) => {
  return (
    <View>
      <Searchbar
        placeholder="Search..."
        onChangeText={text => setFilter(text)}
        value={filter}
        backgroundColor="white"
      />
      <OrderingMenu ordering={ordering} setOrdering={setOrdering} />
    </View>
  );
};

export default RepositoryListHeader;