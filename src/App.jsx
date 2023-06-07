import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ListSection } from "./components/ListSection";
import { GlobalStyles } from "./styles/global";
import { MainStyled } from "./styles/main";
import { GlobalReset } from "./styles/reset";
import { NoteNumbers } from "./components/ListSection/NoteNumbers";
import { TitleOne } from "./styles/typography";

function App() {
  const [noteList, setNoteList] = useState([]);

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <MainStyled>
        <div>
          <Form setNoteList={setNoteList} />

          <NoteNumbers noteList={noteList} />
        </div>
        <ListSection noteList={noteList} setNoteList={setNoteList} />
      </MainStyled>
    </div>
  );
}

export default App;
