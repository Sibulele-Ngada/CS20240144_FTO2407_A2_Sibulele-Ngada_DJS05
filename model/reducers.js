// eslint-disable-next-line no-unused-vars
import { State } from "./store.js";
// eslint-disable-next-line no-unused-vars
import { Action } from "./actions.js";

/**
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case "SUBTRACT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case "RESET": {
      return {
        ...state,
        count: 0,
      };
    }

    default:
      return state;
  }
};
