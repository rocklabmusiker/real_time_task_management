import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoginForm} from './components/users/LoginForm';
import { ProfileScreen } from './components/users/profile';
const App: React.FC = (): ReactElement => {
  return (
   <Provider store={store}>
       <Routes>
          <Router>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
          </Router>
       </Routes>
   </Provider>
  );
}

export default App;
