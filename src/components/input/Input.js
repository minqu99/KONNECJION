import "./Input.css";
import imgLogo from "./homeLogo.png";
import { useNavigate } from "react-router-dom";

function Input() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="Input">
      <div className="logo-box">
        <img src={imgLogo} className="homeLogo" onClick={goToHome} />
      </div>
      <div className="intro-logo">
        <span className="alpa-K">K</span>ONNEC
        <span className="alpa-J">J</span>ION
      </div>

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
          maxlength="500"
          // onChange={saveText}
        />
      </div>
      <div className="analyze-box">
        <button className="analyze">분석하기</button>
      </div>
    </div>
  );
}

export default Input;
