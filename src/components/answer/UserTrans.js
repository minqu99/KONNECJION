import styles from "./UserTrans.module.css"

export default function UserTrans({translatedText}){
    return (
        <div className={styles.usertrans}>
            <p>{translatedText}</p>
      </div>
);
}