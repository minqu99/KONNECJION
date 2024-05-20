import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";
import HomeLogo from "../../common/homeLogo/HomeLogo";
import SiteLogo from "../../common/siteLogo/SiteLogo";
// import Button from "../../common/button/Button";

function Input() {
  let [inputCount, setInputCount] = useState(0);
  const [text, getText] = useState("");

  const navigate = useNavigate();
  const goToResult = () => {
    navigate("/Result-page", { state: { text } });
  }; // navigate to result page and get userText

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
    getText(e.target.value);
  };

  return (
    <div className="Input">
      <HomeLogo />
      <SiteLogo />

      <div className="input-explan">
        <h3>
          난이도를 알고 싶은 글이나 자신의 작문을
          <br />
          일본어로 입력하고 분석해 보세요.
        </h3>
      </div>
      <div className="input-box">
        <textarea
          className="input-text"
          type="text"
          placeholder="텍스트를 입력하세요."
          maxlength="300"
          onChange={onInputHandler}
          value={text}
        />
        <div className="count-box">
          <span className="input-count">{inputCount} / 300</span>
        </div>
      </div>
      <div className="button-box">
        <button className="button-text" onClick={goToResult}>
          분석하기
        </button>
      </div>
    </div>
  );
}

export default Input;
