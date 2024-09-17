import React from 'react';
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Text from "./Text";

const styles = StyleSheet.create({
  pickerContainer: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
  },
});

const OrderingMenu = ({ ordering, setOrdering }) => {
  const [selectedValue, setSelectedValue] = useState(ordering);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setOrdering(value);
  };

  return (
    <View style={styles.pickerContainer}>
      <Text color="textSecondary" fontWeight="bold">Select an item...</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => handleValueChange(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );
};

export default OrderingMenu;
