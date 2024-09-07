import { Pressable } from "react-native"
import Text from "./Text";

const AppBarTab = ({ item, style }) => {
  return (
    <Pressable style={style}>
      <Text color='appBarText' fontWeight='bold'>{item}</Text>
    </Pressable>
  );
};

export default AppBarTab