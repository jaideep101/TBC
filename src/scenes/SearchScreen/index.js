import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  Header,
  Body,
  Button,
  Title,
  CardItem,
} from 'native-base';
import ajax from '../../services/FetchData';
import {StyleSheet, View, FlatList} from 'react-native';
import { TBC_COLOR } from '../../config/colorConstant';

export default class SearchScreen extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const URI = 'https://jsonplaceholder.typicode.com/users';
    const users = await ajax.fetchUsers(URI);
    this.setState({users});
  }
  renderSeparator = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: TBC_COLOR,
        }}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2text}>Tyre dealers list</Text>
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            // eslint-disable-next-line no-alert
            <View style={styles.flatview} onPress={() => alert('clicked')}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  h2text: {
    marginBottom: 10,
    marginStart: 20,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  flatview: {
    backgroundColor: '#add8e6',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    height: 70,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 20,
  },
  email: {
    color: 'green',
    textAlign: 'left',
    marginLeft: 20,
  },
});
