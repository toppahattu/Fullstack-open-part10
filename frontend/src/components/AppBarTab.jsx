import React from 'react';
import { Link } from "react-router-native";

import Text from "./Text";

const AppBarTab = ({ item, style, signOut }) => {
  const [label, path] = item

  const handlePress = async () => {
    if (signOut) {
      await signOut();
    }
  };

  return (    
    <Link style={style} to={path} onPress={handlePress}>
      <Text color='appBarText' fontWeight='bold'>{label}</Text>
    </Link>
  );
};

export default AppBarTab