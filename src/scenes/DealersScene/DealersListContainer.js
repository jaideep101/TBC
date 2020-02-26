// import {connect} from 'react-redux';
import DealersListView from './DealersListView';
import {getListOfDealers} from '../../reducers/DealersReducers/actions';

const mapStateToProps = state => ({
  ...state.dealers,
});

const mapDispatchToProps = dispatch => ({
  getListOfDealers: () => {
    dispatch(getListOfDealers());
  },
});

export default DealersListView;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(DealersListView);
