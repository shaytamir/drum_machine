import React from "react";
import { s3_imgUrl } from "../../config.json";

// import Text from "../../service/default_text.txt";

function Editor(props) {
  //   const [HTMLtext, setHTMLtext] = useState("loading .. ..");
  const { get, set, max, setMax } = props;
  //   const [maximaized, setMaximaized] = useState(false);
  const editorWingth = max ? "100%" : "35%";

  return (
    <div id="editor_div" style={{ width: editorWingth }}>
      <div className="header">
        <h3></h3>
        <h3>Editor</h3>
        <img
          src={`${s3_imgUrl}/icons/${max ? "min" : "max"}.png`}
          alt="maximize"
          onClick={(e) => {
            setMax(!max);
          }}
        />
      </div>
      <textarea
        name="editor"
        id="editor"
        // className="editor-min"
        className={`editor ${max ? "editor-max" : "editor-min"}`}
        // defaultValue={get}
        value={get}
        onChange={(e) => {
          //   console.log(e.target.value);
          set(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          set("");
        }}
      >
        clear
      </button>
    </div>
  );
}

export default Editor;
