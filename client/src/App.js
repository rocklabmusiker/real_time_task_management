import React from 'react'
import { Provider } from 'react-redux'
import { store } from './components/store/store'
import Login from './components/login/login'
import Register from './components/login/register'
import Board from './components/board/board'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
