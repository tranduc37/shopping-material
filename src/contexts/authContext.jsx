import React, { useReducer, createContext } from "react";
import {authReducer} from '../reducer/authReducer';
export const AuthContext = createContext();
 
const initialState = {
  dataInput: '',
  loading: false,
  error: null,
  user: {
    fullName: '',
    avatar: null,
  }
};


export const AuthContextProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  );
};