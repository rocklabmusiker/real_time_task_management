import React, { ReactElement, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/users/LoginForm";
import { ProfileScreen } from "./components/users/profile";
import { rehydrateAuthentication } from "./components/slices/userSlices";
import { ProtectedRoute } from "./components/users/ProtectedRoute";
import { CreateBoardForm } from "./components/users/CreateBoardForm";
const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(rehydrateAuthentication());
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={
      <ProtectedRoute>
        <ProfileScreen />
      </ProtectedRoute>
    } />
     <Route path="/board" element={<CreateBoardForm />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
