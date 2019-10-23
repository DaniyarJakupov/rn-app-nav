import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import TabNavigator from './src/navigation/TabNavigator';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
};

export default App;
