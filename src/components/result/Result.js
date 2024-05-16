import "./Result.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import HomeLogo from "../../common/homeLogo/HomeLogo";
import SiteLogo from "../../common/siteLogo/SiteLogo";
import ResultBox from "../../common/resultBox/ResultBox";

const SetUserText = ({ text }) => {
  return (
    <span className="input-text span-text">
      {text.split("\n").map((txt) => (
        <>
          {txt}
          <br />
        </>
      ))}
    </span>
  );
};

function Result() {
  const location = useLocation();
  const userText = location.state.text;

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  }; // navigate to home page
  const goToInput = () => {
    navigate("/Input");
  }; // navigate to input-page
  const goToTrans = () => {
    navigate("/Translation");
  };

  return (
    <div className="Result">
      <HomeLogo />
      <SiteLogo />
      <div className="input-box">
        <SetUserText text={userText} />
      </div>
      <div className="reset-box">
        <button className="reset" onClick={goToInput}>
          초기화
        </button>
      </div>
      <ResultBox />
      <div className="button-box">
        <button className="button-text button-home" onClick={goToHome}>
          홈으로
        </button>
        <button className="button-text button-trans" onClick={goToTrans}>번역 연습</button>
      </div>
    </div>
  );
}

export default Result;
