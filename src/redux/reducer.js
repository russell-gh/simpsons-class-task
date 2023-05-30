import { initialState } from "./initialState";
import {
  SET_SORT_TYPE,
  SET_API_DATA,
  DELETE_CHARACTER,
  TOGGLE_LIKED,
  SET_SEARCH_TERM,
} from "./types";

export function reducer(state = initialState, action) {
  //destructure the action
  const { payload } = action;

  switch (action.type) {
    case SET_SORT_TYPE:
      return { ...state, sortType: payload };

    case SET_API_DATA:
      return { ...state, simpsons: payload };

    case DELETE_CHARACTER: {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === payload;
      });
      const simpsons = [...state.simpsons];
      simpsons.splice(indexOf, 1);
      return { ...state, simpsons };
    }

    case TOGGLE_LIKED: {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === payload;
      });
      const simpsons = [...state.simpsons];
      simpsons[indexOf].liked = !simpsons[indexOf].liked;
      return { ...state, simpsons };
    }

    case SET_SEARCH_TERM: {
      return { ...state, searchTerm: payload };
    }

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
