import React from 'react';
import Header from './components/header'
import Headline from './components/headline/index'
import './app.scss'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'jbloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]



function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
