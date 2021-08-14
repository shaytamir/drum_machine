import React from "react";
import Sets from "../../services/drum_sets/sets";

function Setings(props) {
  const { drumSet, setdrumSet } = props;
  console.log(Sets);
  return (
    <div>
      <div id="toggle_sets" onClick={() => {}}>
        <div id="toggle">
          {Object.keys(Sets).map((set, i) => (
            <div key="i" className="set_title">
              {set}
            </div>
          ))}
          {/* {Sets.map((set, i) => {
            console.log(123);
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Setings;
