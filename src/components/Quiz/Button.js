import "./style.css"
export default function Button (props) {
    return <>
        <div className={props.isCorrect ? "correct" : "incorrect"}>
            <p>{props.children}</p>
        </div>
    </>;
}