import { BalanceValue } from "../../../styles/balance";
import { TitleFour, TitleThree } from "../../../styles/typography";

export const NoteNumbers = ({ noteList }) => {
  const totalValue = noteList.reduce((accValue, note) => {
    if (note.typeValue === "Entrada") {
      return accValue + note.value;
    } else {
      return accValue - note.value;
    }
  }, 0);

  return (
    <BalanceValue>
      <div>
        <TitleThree>Valor Total</TitleThree>
        <TitleFour>O valor se refere ao saldo</TitleFour>
      </div>

      <TitleThree fontColor="#FD377E">
        {totalValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TitleThree>
    </BalanceValue>
  );
};
