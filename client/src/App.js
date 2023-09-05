import React from 'react';
import {Provider} from 'react-redux';
import { store } from './components/store/store'
import Login from './components/login/login';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
        <Router>
     <Routes>
  <Route exact path="/login" element={<Login />} />
  </Routes>
</Router>
    </Provider>
  );
}

export default App;
