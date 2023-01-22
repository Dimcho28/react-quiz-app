
export default function Quiz (props) {
    return <>
        <div>
            <h2>{props.question}</h2>
            { props.children }
        </div>
    </>;
}