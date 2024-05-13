import styles from "./Finish.module.css"
import { Link } from "react-router-dom";

export default function Finish(){
    return (
        <div className={styles.finish}>
            <Link to="/">끝내기</Link>
        </div>
);
}