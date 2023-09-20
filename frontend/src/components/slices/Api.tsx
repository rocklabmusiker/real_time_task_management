import axios, { AxiosError } from 'axios';

interface UserData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

interface ErrorResponse {
  message: string;
}

export const loginUser = async (userdata: UserData): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      'http://localhost:5000/api/auth/login',
      userdata
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;

    if (axiosError && axiosError.response && axiosError.response.data) {
      throw new Error(axiosError.response.data.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
};
