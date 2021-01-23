import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PopularMovieContainer from '../containers/PopularMovieContainer/PopularMovieContainer';
import DetailMovieContainer from '../containers/DetailMovieContainer/DetailMovieContainer';

const HomeStack = createStackNavigator();

const HomeNavigation = () => (
  <HomeStack.Navigator headerMode="none" initialRouteName="PopularMovie">
    <HomeStack.Screen name="PopularMovie" component={PopularMovieContainer} />
    <HomeStack.Screen name="DetailMovie" component={DetailMovieContainer} />
  </HomeStack.Navigator>
);

export default HomeNavigation;
