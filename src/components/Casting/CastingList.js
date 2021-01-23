import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import CastingCard from './CastingCard';
import colors from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  filterButton: {
    position: 'absolute',
    top: '90%',
    left: '80%',
    backgroundColor: colors.yellow,
    borderRadius: 30,
    padding: 10,
  },
});

const CastingList = ({navigation, route, castingMovie}) => (
  <View>
    <ScrollView>
      <FlatList
        style={styles.container}
        data={castingMovie}
        keyExtractor={({id}) => id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        horizontal
        renderItem={({item: {id, original_name, profile_path, character, popularity}}) => (
          <CastingCard
            id={id}
            original_name={original_name}
            profile_path={profile_path}
            character={character}
            popularity={popularity}
            navigation={navigation}
            route={route}
          />
        )}
      />
    </ScrollView>
  </View>
);

export default CastingList;