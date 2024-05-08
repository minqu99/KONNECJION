import "./Main.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const goToInput = () => {
    navigate("/Input");
  };
  return (
    <div className="Main">
      <div className="intro-explan">
        <h2>작문이나 글을 분석하고 싶으신 분!</h2>
        <h2>자신의 수준에 맞는 문장을 연습하고 싶으신 분!</h2>
      </div>
      <div className="intro-site">
        <h3>그런 당신을 위한 일본어 작문 분석 사이트</h3>
      </div>
      <div className="intro-logo">
        <span className="alpa-K">K</span>ONNEC
        <span className="alpa-J">J</span>ION
      </div>
      <div className="circle">
        <button className="startButton" onClick={goToInput}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Main;
