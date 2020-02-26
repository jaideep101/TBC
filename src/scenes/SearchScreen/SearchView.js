import React, {Component} from 'react';
import {View, Dimensions, Text} from 'react-native';
import Constants from '../../Config/Constants';
const {width, height} = Dimensions.get('window');

class SearchView extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Constants.PRIMARY_BG_COLOR,
          width,
          height: height - 45,
        }}>
        <View>
          <Text>Search Page</Text>
        </View>
      </View>
    );
  }
}

export default SearchView;
