import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/registerActions';
import classes from './register.module.css'
const Register = () => {
   const [userData, setUserData] = useState( {username: '',email: '', password: ''})
   const dispatch =useDispatch();
   const error = useSelector(state => state.auth.error)
   const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

   const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

   return (
    <div className={classes.container}> 
     <div className={classes.formClass}>
      <form onSubmit={onSubmit} >
      <input type="text" name="username" onChange={onChange} placeholder="name" />
        <input type="email" name="email" onChange={onChange} placeholder="Email" />
        <input type="password" name="password" onChange={onChange} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      {error && <p className={classes.error}>{error.message}</p>}
     </div>
    </div>
  )
}

export default Register
