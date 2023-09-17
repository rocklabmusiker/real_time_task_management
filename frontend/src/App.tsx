import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Ensure you've imported LoginForm correctly
import {LoginForm} from './components/users/LoginForm';
import { ProfileScreen } from './components/users/profile';
const App: React.FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/profile" element={<ProfileScreen  />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
