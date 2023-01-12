/* eslint-disable prettier/prettier */
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from '../reducers/userReducer';


const store = configureStore({
    reducer: userReducer
})



export default store;
