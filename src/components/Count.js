import React, { useReducer } from "react";

// initial state
const countState = {
  clicks: 0,
  users: [],
  active: true,
  count: 0,
};

// ...state has all the current state of countState

// reducer function
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
      break;

    default:
      break;
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(countReducer, countState);
  return (
    <div>
      <h2>{state.count}</h2>
      {/* call dispatch with parameter type INCREMENT */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      {/* call dispatch with parameter type DECREMENT */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
};

export default Count;
