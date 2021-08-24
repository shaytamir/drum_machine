import React, { useEffect, useContext, useRef } from "react";
import { drumColor } from "../../services/colorService";
import { DisplayContext } from "./Display";

function Pads(props) {
  const display = useContext(DisplayContext);

  const { state, dispatch } = display;
  const savedState = useRef();

  useEffect(() => {
    savedState.current = state;
  }, [state]);

  useEffect((e) => {
    function handleKeyBoard(e) {
      const st = savedState.current;
      if (savedState.current.power) {
        for (let drum of st.drumSet.setValue) {
          let upperKey = e.key.toLocaleUpperCase();
          if (upperKey === drum.key) {
            handlePad(upperKey, drum.str);
          }
        }
      }
    }

    window.removeEventListener("keydown", handleKeyBoard);
    window.addEventListener("keydown", (e) => {
      handleKeyBoard(e);
    });
    return () => {
      window.removeEventListener("keydown", handleKeyBoard);
    };
  }, []);

  function playAudio(key) {
    var audioTAG = document.getElementById(key);
    audioTAG.currentTime = 0;
    audioTAG.volume = savedState.current.volume;
    audioTAG.play();
    return audioTAG;
  }

  function handlePad(key, str) {
    if (state.power) {
      drumColor(key + "Box");
      playAudio(key);
      dispatch(["setPad", str]);
    }
  }

  return (
    <div id="pads">
      {state.drumSet &&
        state.drumSet.setValue.map((pad, i) => {
          return (
            <div
              key={i}
              id={pad.key + "Box"}
              className="drum-pad"
              onClick={(e) => {
                handlePad(pad.key, pad.str);
              }}
            >
              <div>
                {pad.key}
                <audio id={pad.key} className="clip" src={pad.value}>
                  <source src={pad.value} type="audio/mp3" />
                </audio>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Pads;
