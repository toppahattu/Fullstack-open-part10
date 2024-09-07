import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
  },
  flexItem: {
    padding: 15,
  }
});

const AppBar = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => <AppBarTab key={index} item={item} style={styles.flexItem} />)}
    </View>
  );
};

export default AppBar;