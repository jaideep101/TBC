import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

export default class GrayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true, data: ''};
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=1').then(res => {
      this.setState({
        isLoading: false,
        data: res.data.data,
      });
    });
  }

  renderItem(item) {
    const {id, first_name, last_name, email, avatar} = item.item;
    return (
      <View style={styles.itemView}>
        <View style={styles.imgContainer}>
          <Image style={styles.imageStyle} source={{uri: avatar}} />
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.name}>{first_name + ' ' + last_name}</Text>
          <Text numberOfLines={1}>{email.substring(1, 4)+'@gmail.com'}</Text>
          <Text numberOfLines={1}>{'TBCC Corporations'}</Text>
        </View>
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.headerBg}>
        <Text style={styles.headerText}>TBCC Dealers</Text>
      </View>
    );
  }

  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }

    return (
      <View style={styles.headerBg}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
          stickyHeaderIndices={[0]}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemView: {
    flex: 1,
    width,
    borderBottomWidth: 1.5,
    borderColor: '#cdcdcd',
    borderStyle: 'solid',
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 0,
    borderColor: '#f4f4f4',
    borderWidth: 1.5,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 22,
    color: '#ff0000',
    textAlign: 'left',
  },
  imageStyle: {
    height: 110,
    width: 110,
  },
  headerBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5544',
    height: 50,
  },
  headerText: {
    fontFamily: 'Verdana',
    fontSize: 24,
    color: '#FFFFFF',
    backgroundColor: '#FF5544',
  },
});
