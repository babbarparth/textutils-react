import React, { useState } from "react";

export default function TextForm(props) {
  const HandleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("UpperCase is enabled", "success");
  };
  const HandleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const HandleDownClick = () => {
    // console.log("On Change");
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showalert("LowerCase is enabled", "success");
  };
  const handleinverseclick = () => {
    // console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showalert("Inverse is enabled", "success");
  };
  const ResetToOriginal = () => {
    // console.log("Reset");
    setText("Enter text here");
    props.showalert("Reset is enabled", "success");
  };
  const CopyText = () => {
    // console.log("Reset");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text-Copied", "success");
  };
  const RemoveExtraSpaces = () => {
    let newText3 = text.split(/[ ]+/);
    setText(newText3.join(" "));
    props.showalert("Extra Spaces Removed", "success");
  };
  const [text, setText] = useState("Enter text here");
  let len = text.length;
  let len2 = text.split(" ").filter((word) => word.trim() !== "").length;
  // setText("Enter text");
  return (
    <>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={HandleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleDownClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={ResetToOriginal}>
          Reset
        </button>
        <button className="btn btn-primary mx-1" onClick={handleinverseclick}>
          Inverse
        </button>
        <button className="btn btn-primary mx-1" onClick={CopyText}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={RemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {len2} words and {len} Characters
        </p>
        <p>{0.008 * len2} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
