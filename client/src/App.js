import WordCard from "./components/WordCard"
import { Container } from "reactstrap";
import words from "./words.json";

function App() {
  const food = words.filter(word => word.category === "food")
  const people = words.filter(word => word.category === "people")
  const medical = words.filter(word => word.category === "medical")
  const places = words.filter(word => word.category === "places")
  const misc = words.filter(word => word.category === "misc")
  return (
    <Container>
      <h1 className="header">Food</h1>
      {
        food.map(word => {
          return <WordCard key={word.id} word={word.word} audio={word.audio}/>
        })
      }
      <h1 className="header">People</h1>
      {
        people.map(word => {
          return <WordCard key={word.id} word={word.word} audio={word.audio}/>
        })
      }
      <h1 className="header">Medical</h1>
      {
        medical.map(word => {
          return <WordCard key={word.id} word={word.word} audio={word.audio}/>
        })
      }
      <h1 className="header">Places</h1>
      {
        places.map(word => {
          return <WordCard key={word.id} word={word.word} audio={word.audio}/>
        })
      }
      <h1 className="header">Miscellaneous</h1>
      {
        misc.map(word => {
          return <WordCard key={word.id} word={word.word} audio={word.audio}/>
        })
      }
    </Container>
  );
}

export default App;
