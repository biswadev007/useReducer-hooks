import React, { useReducer } from "react";
import "./styles.css";

const reducer = (state: { count: number; showText: boolean }, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "TOGGLETEXT":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="App">
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLETEXT" });
        }}
      >
        Tap
      </button>
      {state.showText && <h2>Showing text</h2>}
    </div>
  );
}
