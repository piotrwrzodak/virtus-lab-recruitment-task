import React, { useEffect } from 'react';

import Container from './Container';
import Header from './Header';

function App(props) {
  const { init } = props;
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

export default App;
