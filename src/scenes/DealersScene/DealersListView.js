import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DealersItem from '../../Components/DealersItem';
import ProfileButton from '../../Components/ProfileButton';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';
import {View, ScrollView, StatusBar, Dimensions} from 'react-native';
import Constants from '../../Config/Constants';
const {width, height} = Dimensions.get('window');

class DealersListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealers: [],
    };
  }

  componentDidMount(nextProps) {
    const {getListOfDealers} = this.props;
    getListOfDealers();
    if (nextProps.completed) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        dealers: nextProps.dealers,
        error: nextProps.error,
        completed: nextProps.completed,
      });
    }
  }
  /*
  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        dealers: nextProps.dealers,
        error: nextProps.error,
        completed: nextProps.completed,
      });
    }
  }

  getHotels = city => {
    /*
    // replace it with router flux Actions move
    this.props.navigation.navigate('Hotels', {city});

  };
*/
  render() {
    return (
      <View
        style={{
          backgroundColor: Constants.PRIMARY_BG_COLOR,
          width,
          height: height - 45,
        }}>
        <StatusBar barStyle={Constants.BAR_STYLE} />
        {this.state.completed ? (
          this.state.error ? (
            <Error />
          ) : (
            <ScrollView>
              <DealersItem dealer={{}} key={0} event={this.getHotels} />
              {this.state.dealers.map(dealer => (
                <DealersItem
                  dealer={dealer}
                  key={dealer.id}
                  event={this.getHotels}
                />
              ))}
            </ScrollView>
          )
        ) : (
          <Loading />
        )}
      </View>
    );
  }
}

DealersListView.propTypes = {
  getListOfDealers: PropTypes.func.isRequired,
  dealers: PropTypes.array.isRequired,
};

export default DealersListView;
