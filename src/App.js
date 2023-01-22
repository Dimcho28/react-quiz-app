import Quiz from "./components/Quiz";
import Button from "./components/Quiz/Button";

function App() {
  return <>
    <h1>Quiz App</h1>
    <Quiz question="Колко бързо ...?">
      <Button isCorrect={false}>10 км/ч</Button>
      <Button isCorrect={true}>20 км/ч</Button>
      <Button isCorrect={false}>30 км/ч</Button>
    </Quiz>
    <Quiz question="Колко са ...">
      <Button isCorrect={false}>5 см</Button>
      <Button isCorrect={false}>10 см</Button>
      <Button isCorrect={true}>15 см</Button>
    </Quiz>
  </>;
}

export default App;
