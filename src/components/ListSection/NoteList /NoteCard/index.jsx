import {
  ItensValue,
  DivSectionOne,
  DivSectionTwo,
  FlagDiv,
  ContentDiv,
} from "../../../../styles/itens";
import { Body, TitleThree } from "../../../../styles/typography";

export const NoteCard = ({ note, removeNoteFromList }) => {
  let color = "";
  if (note.typeValue === "Entrada") {
    color = "#03B898";
  } else {
    color = "#E9ECEF";
  }
  return (
    <ItensValue>
      <FlagDiv flagColor={color}></FlagDiv>
      <ContentDiv>
        <DivSectionOne>
          <TitleThree>{note.description}</TitleThree>
          <Body fontColor="--Color-Grey-3">{note.typeValue}</Body>
        </DivSectionOne>
        <DivSectionTwo>
          <Body fontColor="--Color-Grey-3">
            {note.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Body>
          <button onClick={() => removeNoteFromList(note.id)}>Excluir</button>
        </DivSectionTwo>
      </ContentDiv>
    </ItensValue>
  );
};
