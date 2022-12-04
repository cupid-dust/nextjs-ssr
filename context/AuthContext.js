import React, { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';
import axios from '../utils/axios';

const initialAuthState = {
  isAuthenticated: false,
  user: null,
};

const setSession = (accessToken, user) => {
  if (accessToken) {
    Cookies.set('user', JSON.stringify(user));
    Cookies.set('accessToken', accessToken);
  } else {
    Cookies.remove('user');
    Cookies.remove('accessToken');
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case 'REGISTER': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (email, password) => {
    const response = await axios.post('/api/account/login', {
      email,
      password,
    });
    const { accessToken, user } = response.data;

    setSession(accessToken, user);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (email, name, password) => {
    const response = await axios.post('/api/account/register', {
      email,
      name,
      password,
    });
    const { accessToken, user } = response.data;

    setSession(accessToken, user);

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
