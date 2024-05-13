import Next from "./Next";
import BestAnswer from "./BestAnswer";
import Finish from "./Finish";
import UserTrans from "./UserTrans";
import ExplainText1 from "../pages/ExplainText1";

export default function MainAns(){

    const translatedText = localStorage.getItem('translatedText') || '';

    return (
        <div>
            <ExplainText1 />
            <UserTrans translatedText={translatedText} />
            <BestAnswer></BestAnswer>
            <Finish></Finish>
            <Next></Next>
        </div>
    );
}