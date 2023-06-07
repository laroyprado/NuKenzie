import { ListItens } from "../../../styles/listItens";
import { NoteCard } from "./NoteCard";

export const NoteList = ({ noteList, setNoteList }) => {
  const removeNoteFromList = (noteId) => {
    if (confirm("Você deseja mesmo excluir esse valor?")) {
      setNoteList((noteList) => noteList.filter((note) => note.id !== noteId));
    }
  };

  return (
    <ListItens>
      {noteList.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          removeNoteFromList={removeNoteFromList}
        />
      ))}
    </ListItens>
  );
};
