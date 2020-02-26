/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  Platform,
} from 'react-native';
var colorConstants = require('../config/colorConstant')

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  resource: PropTypes.require,
};
const styles = StyleSheet.create({
  container: {
    tintColor: colorConstants.BLACK_COLOR,
    overflow: 'hidden',
    height: 27,
    width: 27,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: { justifyContent: 'center', alignItems: 'center', height: 60 },
  selectedcontainer: {
    tintColor: 'red',
    overflow: 'hidden',
    height: 27,
    width: 27,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TabIcon = props => (
  <View style={styles.viewContainer}>
    <Image
      // style={props.focused ? styles.selectedcontainer : styles.container}
      source={props.resource}
    />
    <Text
      style={{
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        color: props.focused ? colorConstants.BROWSE_RED : colorConstants.BLACK_COLOR,
      }}>
      {props.title}
    </Text>
  </View>
);
TabIcon.propTypes = propTypes;

export default TabIcon;
