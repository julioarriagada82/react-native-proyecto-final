import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from './BottomTabStack';
import Login from '../screen/Login/Login';

const RootStack = createStackNavigator();

const RootNavigation = ({loggedIn, isCurrentlyLoggedIn}) => {
  useEffect(() => {
    isCurrentlyLoggedIn();
  }, [isCurrentlyLoggedIn]);

  if (loggedIn === undefined) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        {loggedIn ? (
          <>
            <RootStack.Screen name="Tabs" component={HomeTab} />
          </>
        ) : (
          <RootStack.Screen name="Login" component={Login} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
