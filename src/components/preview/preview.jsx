import React from "react";
import marked from "marked";

function Preview(props) {
  const { text, max } = props;

  marked.setOptions({
    breaks: true,
  });

  const editorWingth = max ? "none" : "block";

  return (
    <div id="preview_div" style={{ display: editorWingth }}>
      <h3>Preview</h3>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default Preview;
