import { StyleSheet, Platform } from 'react-native';
var colorConstants = require('../../config/colorConstant');

const header = {
  container: {
    flex:1,
    backgroundColor: colorConstants.BROWSE_RED,
  },
  viewContainer: {
    height: (Platform.OS === 'ios') ? 50 : 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorConstants.BROWSE_RED
  },
  headerText: {
    textAlign: 'center',
    color: colorConstants.WHITE_COLOR,
    fontSize: 18,
    fontWeight:'bold',
  },
};

export default header;
