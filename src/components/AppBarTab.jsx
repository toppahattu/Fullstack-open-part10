import { Link } from "react-router-native";

import Text from "./Text";

const AppBarTab = ({ item, style }) => {
  const [label, path] = item
  return (    
    <Link style={style} to={path}>
      <Text color='appBarText' fontWeight='bold'>{label}</Text>
    </Link>
  );
};

export default AppBarTab