import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Constants from '../../config/Constants'
import { TBC_COLOR } from '../../config/colorConstant';
var colorConstant = require('../../config/colorConstant')

export default class splashscreen extends Component {

  componentDidMount() {
    setTimeout(function () {
      Actions.login();
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colorConstant.WHITE_COLOR, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: colorConstant.TBC_COLOR }}>{'Splash Screen'}</Text>
      </View>
    );
  }
}
