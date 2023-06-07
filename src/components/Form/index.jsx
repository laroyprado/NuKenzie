import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  StyleSelect,
  StyledInput,
  StyledLabel,
  FormStyled,
  StyledText,
  TypeValueDiv,
  ButtonStyled,
} from "../../styles/form";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ setNoteList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("Entrada");

  const addNoteToList = () => {
    const newNote = { id: uuidv4(), description, value, typeValue };
    setNoteList((noteList) => [...noteList, newNote]);
    toast.success("Valor Adicionado Com Sucesso");
  };

  const submit = (e) => {
    e.preventDefault();
    addNoteToList();
    setDescription("");
    setTypeValue("Entrada");
    setValue("");
  };

  return (
    <FormStyled onSubmit={submit}>
      <StyledLabel htmlFor="description">Descrição</StyledLabel>
      <StyledInput
        placeholder="Digite aqui sua descrição"
        id="description"
        name="description"
        type="text"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <StyledText>Ex: Compra de roupas</StyledText>

      <StyledLabel htmlFor="value">Valor (R$)</StyledLabel>
      <StyledInput
        id="value"
        name="value"
        type="number"
        required
        placeholder="1"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      />
      <TypeValueDiv>
        <StyledLabel htmlFor="valueType">Tipo de valor</StyledLabel>
        <StyleSelect
          name="valueType"
          id="valueType"
          defaultValue="Entrada"
          onChange={(e) => setTypeValue(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="depesa">Despesa</option>
        </StyleSelect>
      </TypeValueDiv>

      <ButtonStyled type="submit">Inserir Valor</ButtonStyled>
      <ToastContainer />
    </FormStyled>
  );
};
