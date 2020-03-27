import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import intro from './intro';

export default combineReducers({
  auth: auth,
  form: formReducer,
  intro: intro
});
