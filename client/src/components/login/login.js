import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../actions/authActions';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);
    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch(loginUser({email,password}))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email"
        value= {email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='email'/>

        <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        />
        <button type='submit'>Login</button>
        {authState.error && <p>{authState.error.message}</p>}
      </form>
    </div>
  )
}

export default Login
