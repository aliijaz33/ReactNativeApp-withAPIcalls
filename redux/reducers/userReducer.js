/* eslint-disable prettier/prettier */
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    name: "Ali",
    age: 25,
    status: "single",
};

export default createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_AGE', (state, action) => {
        state.age = action.payload;
    });
});
