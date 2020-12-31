import WordCard from "./components/WordCard"
import { Container } from "reactstrap";
import words from "./words.json";

function App() {
  return (
    <Container>
      {
        words.map(word => {
          return <WordCard key={word.id} word={word.word} audio={word.audio}/>
        })
      }
    </Container>
  );
}

export default App;
