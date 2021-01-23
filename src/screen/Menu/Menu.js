import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import {useTheme} from '../../context/Theme';
import {useUserInformation} from '../../context/User';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
  },
  userInformation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 5,
    height: 200,
    width: 200,
  },
});

const Menu = ({logout}) => {
  const {mainTheme, darkModeEnabled, toggleDarkMode} = useTheme();
  const {name, email, phone, photo} = useUserInformation();

  const {backgroundColor, textColor} = mainTheme;

  AntDesignIcon.loadFont();

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.userInformation}>
        {!!photo && (
          <Image
            source={{uri: photo}}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <View>
          <Text style={{color: textColor}}>{name}</Text>
          <Text style={{color: textColor}}>{email}</Text>
          <Text style={{color: textColor}}>{phone}</Text>
        </View>
      </View>
      <Switch
        trackColor={{false: colors.white, true: colors.gray}}
        thumbColor={darkModeEnabled ? colors.black : colors.white}
        ios_backgroundColor={colors.white}
        onValueChange={toggleDarkMode}
        value={darkModeEnabled}
      />
      <TouchableOpacity onPress={logout} style={styles.button}>
        <AntDesignIcon name="logout" color={textColor} size={30} />
        <Text style={[styles.text, {color: textColor}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
