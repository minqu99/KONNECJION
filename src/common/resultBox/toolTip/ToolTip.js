import "./ToolTip.css";
// import { useState } from "react";

export default function ToolTip() {
  // const [text, setText] = useState("");

  // const displayHelp = (e) => {
  //     setText(e.target.text);
  // };

  return (
    <div className="ui-tooltip">
      <button className="button-ico button-set" data-tooltip-id="help" />
      <div data-tooltip-id="help">
        <span></span>
      </div>
    </div>
  );
}
