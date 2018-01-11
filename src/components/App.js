import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Summary from './Summary/Summary';
import Feed from './Feed/Feed';

class App extends Component {
  render() {
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Summary />
          <Feed />
        </section>
      </div>
    );
  }
}

export default App;
