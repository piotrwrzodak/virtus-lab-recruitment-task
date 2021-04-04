import { connect } from 'react-redux';
import { initialize } from '../store/root.actions';
import App from './App';

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => dispatch(initialize()),
});

export default connect(null, mapDispatchToProps)(App);
