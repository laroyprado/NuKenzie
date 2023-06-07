import { SectionResume, TextResume } from "../../styles/sectionResume";
import { TitleThree, TitleTwo } from "../../styles/typography";
import { NoteList } from "./NoteList ";
import { NoteNumbers } from "./NoteNumbers";

export const ListSection = ({ noteList, setNoteList }) => {
  return (
    <SectionResume>
      <TextResume>
        <TitleThree>Resumo financeiro</TitleThree>
      </TextResume>

      {noteList.length > 0 ? (
        <NoteList noteList={noteList} setNoteList={setNoteList} />
      ) : (
        <TitleTwo>Você ainda não possui nenhum lançamento</TitleTwo>
      )}
    </SectionResume>
  );
};
