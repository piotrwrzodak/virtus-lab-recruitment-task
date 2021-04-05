import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { initialize } from '../store/root.actions';

import Container from './Container';
import Header from './Header';

function App({ init }) {
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="app">
      <Header />
      <Container />
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  init: () => dispatch(initialize()),
});

export default connect(null, mapDispatchToProps)(App);
