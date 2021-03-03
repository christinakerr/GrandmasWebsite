import WordCard from "./components/WordCard"
import { Container } from "reactstrap";
import words from "./words.json";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const food = words.filter(word => word.category === "food")
  const people = words.filter(word => word.category === "people")
  const medical = words.filter(word => word.category === "medical")
  const places = words.filter(word => word.category === "places")
  const misc = words.filter(word => word.category === "misc")
  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>
            <h1 className="header">Food</h1>
          </Tab>
          <Tab>
            <h1 className="header">People</h1>
          </Tab>
          <Tab>
            <h1 className="header">Medical</h1>
          </Tab>
          <Tab>
            <h1 className="header">Places</h1>
          </Tab>
          <Tab>
            <h1 className="header">Miscellaneous</h1>
          </Tab>
        </TabList>

        <TabPanel>
          {
            food.map(word => {
              return <WordCard key={word.id} word={word.word} audio={word.audio} />
            })
          }
        </TabPanel>
        <TabPanel>
          {
            people.map(word => {
              return <WordCard key={word.id} word={word.word} audio={word.audio} />
            })
          }
        </TabPanel>
        <TabPanel>
          {
            medical.map(word => {
              return <WordCard key={word.id} word={word.word} audio={word.audio} />
            })
          }
        </TabPanel>
        <TabPanel>
          {
            places.map(word => {
              return <WordCard key={word.id} word={word.word} audio={word.audio} />
            })
          }
        </TabPanel>
        <TabPanel>
          {
            misc.map(word => {
              return <WordCard key={word.id} word={word.word} audio={word.audio} />
            })
          }
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default App;
