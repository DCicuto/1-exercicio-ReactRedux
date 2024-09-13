import React, { Component } from 'react';
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import store from './store';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <Video />
        <Sidebar/>
      </div>
    );
  }
}

export default App;