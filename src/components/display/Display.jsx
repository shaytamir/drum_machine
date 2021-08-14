import React, { useState } from "react";
import Sets from "../../services/drum_sets/sets";

import Pads from "./pads";
import Setings from "./setings";

function Display() {
  const [drumSet, setdrumSet] = useState(Sets.set1);
  return (
    <div id="display">
      <Pads drumSet={drumSet} />
      <Setings drumSet={drumSet} setdrumSet={setdrumSet} />

      {/*  */}
      {/*  */}
    </div>
  );
}

export default Display;
