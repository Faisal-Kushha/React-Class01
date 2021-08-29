import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
        <Main />
      </>
    );
  }
}

export default App;
