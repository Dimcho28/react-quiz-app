import "./style.css";

export default function Quiz (props) {
    return <>
        <div className="quiz">
            <div className="quiz-question">
                <h2>{props.question}</h2>
            </div>
            { props.children }
        </div>
    </>;
}
