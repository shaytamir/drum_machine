import React, { useState, useEffect } from "react";
import Sets from "../../services/drum_sets/sets";
import { drumColor } from "../../services/colorService";

function Pads(props) {
  const { drumSet } = props;
  const [DrumDiv, setDrumDiv] = useState();

  useEffect(() => {
    drumSet.map((pad, i) => {});
  }, [drumSet]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      for (let drum of drumSet) {
        if (e.key === drum.key) {
          handlePad(e.key);
        }
      }
    });
  }, []);

  function playAudio(key) {
    var audioTAG = document.getElementById("s" + key);
    console.log(audioTAG);
    audioTAG.play();
    return audioTAG;
  }

  function handlePad(key) {
    // console.log(key);
    drumColor(key);
    playAudio(key);
  }

  return (
    <div id="pads">
      {drumSet.map((pad, i) => {
        return (
          <div key={i} id={pad.key} className="drum-pad">
            <div
              onClick={(e) => {
                handlePad(pad.key);
              }}
            >
              {pad.key}
              <audio id={"s" + pad.key}>
                {/* <source src="/audio/bip.wav" type="audio/mp3" /> */}
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
