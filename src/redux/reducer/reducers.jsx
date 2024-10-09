import { combineReducers } from "@reduxjs/toolkit";
import userDetail from "./userDetail";
import loginDetail from "./loginDetail";

const rootReducer = combineReducers({
    userDetail: userDetail,
    loginDetail: loginDetail


});

export default rootReducer;