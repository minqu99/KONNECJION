import Next from "./Next";
import BestAnswer from "./BestAnswer";
import Finish from "./Finish";
import UserTrans from "./UserTrans";
import ExplainText1 from "../pages/ExplainText1";
import HomeButton from "../../common/homeLogo/HomeLogo.js"
import SiteLogo from "../../common/siteLogo/SiteLogo.js"

export default function MainAns(){

    const translatedText = localStorage.getItem('translatedText') || '';


    const deeplTrans = localStorage.getItem('translatedText') || '';

    return (
        <div>
            <HomeButton />
            <SiteLogo />
            <ExplainText1 />
            <UserTrans translatedText={translatedText} />
            <BestAnswer deeplTrans={deeplTrans} />
            <Finish></Finish>
            <Next></Next>
        </div>
    );
}