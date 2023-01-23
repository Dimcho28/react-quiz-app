import "./style.css"
export default function Button (props) {
    return <>
        <div className={`question-btn ${props.isCorrect ? "correct" : "incorrect"}`}>
            <p>{props.children}</p>
        </div>
    </>;
}