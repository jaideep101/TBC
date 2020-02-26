/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import {fetchToDos} from './../../action/fetchToDos';

export default class BlackScreen extends Component {
  state = {
    users: [],
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const users = this.props.fetchToDos();
    this.setState({users});
  }

  renderSeparator = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const {todos, isFetching} = this.props.todos;

    if (isFetching) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} />
          <Text>isFetching</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.h2text}>{'Search List using redux'}</Text>
            <FlatList
              data={todos}
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
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({fetchToDos}, dispatch),
  };
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(BlackScreen);

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
    fontSize: 20,
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
