import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useNavigate } from 'react-router-native';

import AppBarTab from './AppBarTab';
import theme from '../themes/theme';
import useMe from '../hooks/useMe';
import useSignOut from '../hooks/useSignOut';

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
  const { id, username } = useMe();
  const signOut = useSignOut();
  const navigate = useNavigate();

  const filteredItems = id && username
  ? items.filter(item => item[0] !== 'Sign in' && item[0] !== 'Sign up')
  : items.filter(item => item[0] !== 'Sign out' && item[0] !== 'Create a review');

  const handleSignOut = async () => {
    if (id && username) {
      await signOut();
      navigate('/');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollContainer}>
        {filteredItems.map((item, index) => (
          <AppBarTab
            key={index}
            item={item}
            style={styles.flexItem}
            signOut={item[0] === 'Sign out' ? handleSignOut : undefined} />
          ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;