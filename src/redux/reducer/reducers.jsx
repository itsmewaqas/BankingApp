import { combineReducers } from "@reduxjs/toolkit";
import userDetail from "./userDetail";
import loginDetail from "./loginDetail";
import themeSlices from "./themeSlices";

const rootReducer = combineReducers({
    userDetail: userDetail,
    loginDetail: loginDetail,
    themeSlices: themeSlices


});

export default rootReducer;