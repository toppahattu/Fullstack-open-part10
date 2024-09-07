import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const Main = () => {
  const appBarItems = ['Repositories']
  return (
    <View backgroundColor={theme.colors.main}>
      <AppBar items={appBarItems}/>
      <RepositoryList />
    </View>
  );
};

export default Main;