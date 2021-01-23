/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigationContainer from './containers/RootNavigationContainer/RootNavigationContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import Theme from './context/Theme';
import UserHandler from './context/User';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Theme>
          <UserHandler>
            <RootNavigationContainer />
          </UserHandler>
      </Theme>
    </Provider>
  );
};

export default App;

