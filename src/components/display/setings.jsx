import React, { useEffect, useContext, useRef } from "react";
import Sets from "../../services/drum_sets/sets";
import { DisplayContext } from "./Display";

function Setings(props) {
  const display = useContext(DisplayContext);
  const savedState = useRef();

  const { state, dispatch } = display;

  useEffect(() => {
    savedState.current = state;
  }, [state]);

  useEffect((e) => {
    function handleKeyBoard2(e) {
      const st = savedState.current;

      console.log(e.key);
      if (st.power)
        if (e.key === "ArrowUp") {
          baxt("back");
        } else if (e.key === "ArrowDown") {
          baxt("next");
        } else if (e.key === "+") {
          dispatch(["volumUp", st.volume]);
        } else if (e.key === "-") {
          dispatch(["volumDown", st.volume]);
        }
    }
    window.removeEventListener("keydown", handleKeyBoard2);

    window.addEventListener("keydown", (e) => {
      handleKeyBoard2(e);
    });
    return () => {
      window.removeEventListener("keydown", handleKeyBoard2);
    };
  }, []);

  function baxt(wich) {
    for (let i = 0; i < Sets.length; i++) {
      if (Sets[i].setName === savedState.current.setName) {
        if (wich === "next") {
          if (i + 1 === Sets.length) {
            dispatch(["setdrumSet", Sets[0]]);
          } else {
            dispatch(["setdrumSet", Sets[i + 1]]);
          }
        } else if (wich === "back") {
          if (i - 1 < 0) {
            dispatch(["setdrumSet", Sets[Sets.length - 1]]);
          } else {
            dispatch(["setdrumSet", Sets[i - 1]]);
          }
        }
      }
    }
  }

  return (
    <div id="setings">
      <div id="power_div">
        Power
        <div
          id="power"
          style={{
            flexDirection: state.power ? "row" : "row-reverse",
          }}
          onClick={() => {
            dispatch(["setPower"]);
          }}
        >
          <div
            className="toggle"
            style={{
              backgroundColor: state.power ? "green" : "red",
            }}
          ></div>
        </div>
      </div>
      <div id="nameDisplay">
        <div>{state.padName}</div>
      </div>

      <div id="inpuyt_div">
        <input
          max="1"
          min="0"
          onChange={(e) => {
            dispatch(["displayVolume", e.target.value]);
          }}
          step="0.01"
          type="range"
          value={state.volume}
        />
      </div>

      <div id="toggle_sets" onClick={() => {}}>
        <div id="toggle">
          <div className="set_title">
            <div className="title">{state.setName}</div>
            <div className="change_title">
              <div
                className="up"
                onClick={() => {
                  baxt("back");
                }}
              >
                &#708;
              </div>
              <div
                className="down"
                onClick={() => {
                  baxt("next");
                }}
              >
                &#709;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setings;
