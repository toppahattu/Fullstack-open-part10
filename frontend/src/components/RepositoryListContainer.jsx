import React from "react";
import { FlatList, Pressable } from "react-native";

import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { ordering, setOrdering, filter, setFilter } = this.props;

    return (
      <RepositoryListHeader
        ordering={ordering}
        setOrdering={setOrdering}
        filter={filter}
        setFilter={setFilter}
      />
    );
  };

  render() {
    const { repositoryNodes, handlePress } = this.props;

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
      ListHeaderComponent={this.renderHeader}
    />
    );
  }
}

export default RepositoryListContainer;