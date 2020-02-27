import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from '../../components/Header';

const ScarletScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'Home'} />
      <View style={styles.viewContainer}>
        <Text style={styles.welcome} onPress={() => Actions.modal()}>
          HOME SCREEN
      </Text>
      </View>
      {/* <Text style={styles.welcome} onPress={() => Actions.SearchScreen()}>
        Open Search Screen
      </Text>
      <Text
        style={styles.welcome}
        onPress={() => Actions.SearchScreenWithTabs()}>
        Open Search Screen with Tabs
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  viewContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default ScarletScreen;
