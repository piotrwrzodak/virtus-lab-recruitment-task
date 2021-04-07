import React, { useEffect } from 'react';

import Container from './container';
import Header from './header';

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

export default App;
