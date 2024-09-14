import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import theme from '../theme';

const Main = () => {
  const appBarItems = [
    ['Repositories', '/'],
    ['Sign in', 'login'],
    ['Sign out', '/'],
  ];

  return (
    <View backgroundColor={theme.colors.main}>
      <AppBar items={appBarItems}/>
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/:id' element={<SingleRepository />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;