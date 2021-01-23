import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import colors from '../config/colors';
import MenuContainer from '../containers/MenuContainer/MenuContainer';
import {useTheme} from '../context/Theme';
import PhotoNavigation from './PhotoStack';

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const HomeTab = () => {
  const {
    mainTheme: {backgroundColor, textColor},
  } = useTheme();

  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        style: {
          backgroundColor,
        },
        showLabel: false,
        activeTintColor: textColor,
        inactiveTintColor: colors.gray,
      }}>
      <BottomTabs.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            MaterialCommunityIcon.loadFont();
            return (
              <View style={styles.icon}>
                <MaterialCommunityIcon name="home" color={color} size={30} />
                <Text style={{color, marginLeft: 10}}>Home</Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Summary"
        component={PhotoNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            FontistoIcon.loadFont();
            return (
              <View style={styles.icon}>
                <FontistoIcon name="camera" color={color} size={25} />
                <Text style={{color, marginLeft: 10}}>Perfil</Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Menu"
        component={MenuContainer}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            FontistoIcon.loadFont();
            return (
              <View style={styles.icon}>
                <MaterialCommunityIcon name="menu" color={color} size={30} />
                <Text style={{color, marginLeft: 10}}>Menu</Text>
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default HomeTab;
