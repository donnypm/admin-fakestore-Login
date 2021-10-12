import { LOGIN, LOGOUT } from "./types";

const initialState = {
  admin: null,
  loading: true,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        admin: action.payload,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        admin: null,
        loading: false,
      };
    default:
      return state;
  }
}
