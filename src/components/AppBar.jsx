import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
  }
});

const AppBar = ({ items }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollContainer}>
        {items.map((item, index) => <AppBarTab key={index} item={item} style={styles.flexItem} />)}
      </ScrollView>
    </View>
  );
};

export default AppBar;