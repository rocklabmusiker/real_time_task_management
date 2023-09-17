import React, { useState, FormEvent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/Api";
import { loginRequest, loginSuccess, loginFailure } from "../slices/userSlices";
import { useNavigate } from 'react-router-dom';
interface Errors {
  email?: string;
  password?: string;
}

interface RootState {
  user: {
    error: string | null;
  };
}

export const LoginForm: React.FC = () => {
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.user.error);
  
  const navigate = useNavigate();
  const validate = (): boolean => {
    let valid = true;
    const initialError: Errors = {};

    if (!email || !email.includes("@")) {
      initialError.email = "Please enter a valid Email";
      valid = false;
    }

    if (!password || password.length < 8) {
      initialError.password = "Password should be at least 8 characters";
      valid = false;
    }

    setErrors(initialError);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      dispatch(loginRequest());
      try {
        const user = await loginUser({ email, password });
        dispatch(loginSuccess(user));
        console.log(loginSuccess(user))
        navigate ("/profile");
        
      } catch (error) {
        if (error instanceof Error) {
          dispatch(loginFailure(error.message));
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto mt-20 space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Corrected this line
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full p-2 border rounded ${errors.password ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      {error && <p className="text-blue-500 text-sm mt-1 text-center">{error}</p>}
      <div>
        <button type="submit" className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </div>
    </form>
  );
};