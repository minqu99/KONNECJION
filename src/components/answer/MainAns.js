import Next from "./Next";
import BestAnswer from "./BestAnswer";
import Finish from "./Finish";
import UserTrans from "./UserTrans";

export default function MainAns(){

    const translatedText = localStorage.getItem('translatedText') || '';

    return (
        <div>
            <UserTrans translatedText={translatedText} />
            <BestAnswer></BestAnswer>
            <Finish></Finish>
            <Next></Next>
        </div>
    );
}