import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Dropdown from 'react-native-dropdown-picker';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    height:40,
  },
  item: {
    backgroundColor: colors.white,
  },
});

const DropdownPicker = ({data = [], onSelect = () => {} , title}) => (
  <Dropdown
    items={data}
    containerStyle={styles.container}
    style={styles.item}
    itemStyle={{
      justifyContent: 'flex-start'
    }}
    onChangeItem={onSelect}
    placeholder={title}
    searchable
    searchablePlaceholder="Busque por un item"
    searchablePlaceholderTextColor={colors.gray}
    autoScrollToDefaultValue={true}
    searchableError={() => <Text>Sin resultado</Text>}
  />
);

export default DropdownPicker;
