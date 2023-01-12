/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';

import { AuthProvider } from './Context/AuthContext';
import AppNav from './Navigation/AppNav';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import API_BASE_URL from './utils/urls';
import Axios from 'axios';

export const ApiAuthContext = createContext();

export const ApiAuthProvider = ({ children }) => {

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchingApiData();
  }, []);
  const fetchingApiData = async () => {
    try {
      const response = await Axios.get(API_BASE_URL);
      setApiData(response.data);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ApiAuthContext.Provider value={{ apiData, isLoading }}>
      {children}
    </ApiAuthContext.Provider>
  )

}

const App = () => {


  return (
    <ApiAuthProvider>
      <Provider store={store}>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </Provider>
    </ApiAuthProvider>

  );
};




export default App;
