import { connect } from 'react-redux';

import { initialize } from '../store/root.actions';

import App from './App.cmp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => dispatch(initialize()),
});

export default connect(null, mapDispatchToProps)(App);
