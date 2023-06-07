import logotipo from "../../assets/logotipo.svg";
import { HeaderStyle, ImgStyle } from "../../styles/header";

export const Header = () => {
  return (
    <HeaderStyle>
      <ImgStyle src={logotipo} alt="" />
    </HeaderStyle>
  );
};
