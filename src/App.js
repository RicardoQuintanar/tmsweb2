import React, { Component } from 'react';

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Example from "./components/Youtube"

class App extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <Main />
        <Footer />
        <Example />
      </div>
    );
  }
}

export default App;
