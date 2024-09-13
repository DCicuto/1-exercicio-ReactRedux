import React, { Component } from 'react';
import { Provider } from 'react-redux'; // Importar o Provider do react-redux
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import store from './store'; // Importar a store

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}> {/* Usar o Provider para fornecer a store */}
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;