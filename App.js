import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreens';

import { Provider as BlogProvider } from './src/context/BlogContext';

import React from 'react';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    ShowScreen: ShowScreen,
    CreateScreen: CreateScreen,
    EditScreen: EditScreen,
  },
  {
    InitialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}