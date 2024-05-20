import "./ResultBox.css";
import ToolTip from "./toolTip/ToolTip";

export default function ResultBox({ translatedText }) {
  return (
    <div>
      <div className="line">
        <div className="result-box box-light box1">
          <div className="result-title">종합 평가</div>
        </div>
        <div className="result-box box-dark box2">
          <div className="result-title">문장 수준</div>
        </div>
      </div>
      <div className="line">
        <div className="result-box box-light box3">
          <div className="result-title add-mark">다빈도 어휘</div>
          <ToolTip />
        </div>
      </div>
      <div className="line">
        <div className="result-box box-light box4">
          <div className="result-title add-mark">어휘 수준</div>
        </div>
        <div className="result-box box-dark box5">
          <div className="result-title add-mark">번역</div>
          {translatedText && (
            <div className="deeplTrans">
              {translatedText.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
