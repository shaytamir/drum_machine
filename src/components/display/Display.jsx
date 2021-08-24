import React, { useReducer } from "react";

import Pads from "./pads";
import Setings from "./setings";
import reducerValue from "../../services/reducers/displayReducer";

export const DisplayContext = React.createContext();

function Display() {
  const [reducer, initialState] = reducerValue;
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="display">
      <DisplayContext.Provider
        value={{
          state: value,
          dispatch: dispatch,
        }}
      >
        <Pads />
        <Setings />
      </DisplayContext.Provider>
    </div>
  );
}

export default Display;
