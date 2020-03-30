import { UPDATE_TITLE, UPDATE_DESC } from "../actions/types";

const INITIAL_STATE = {
  title: "Senior Full-Stack Engineer",
  description: "Creative product design and development for start-ups and SMEs."
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_DESC:
      return { ...state, description: action.payload };
    default:
      return state;
  }
}
