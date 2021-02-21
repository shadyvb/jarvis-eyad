import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducers from "./reducers";

// Default state from all reducers
const defaultState = reducers.reduce(
  (all, cur) => ({ ...all, [cur.name]: cur.default }),
  {}
);

/**
 * Aggregate reducer, proxying actions to defined reducers
 *
 * @param {object} state  Global state object
 * @param {object} action Dispatched action object
 */
const reducer = (state, { type, payload }) => {
  // Get reducer name, and action callback, from action `type`
  const [name, ...callbackSegments] = type.split("|");
  const callback = callbackSegments.join("_");
  // Find the target reducer object by name
  const reducer = reducers.find((reducer) => reducer.name === name);
  // Execute the action callback on the related state branch
  return {
    ...state,
    [name]: reducer[callback](state[name], payload, state)
  };
};

/**
 * State context object that will make the state/reducer available throughout all components
 */
const StateContext = createContext();

/**
 * State context provider/wrapper
 *
 * @param {object} props            Component props
 * @param {object} props.children   Context consumers
 */
const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch: (type, payload) => dispatch({ type, payload })
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

StateContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};

/**
 * Custom hook to shortcut into the context object
 */
const useStateContext = () => useContext(StateContext);

export { StateContextProvider, useStateContext };
