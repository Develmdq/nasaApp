import {
  HeaderContainer,
  HeaderTitle,
  ImgLogo,
} from "../styles/styledComponents";
import { StatusBar } from "expo-status-bar";

const Header = () => {
  return (
    <HeaderContainer>
      <StatusBar style="light" />
      <HeaderTitle>Explorar</HeaderTitle>
      <ImgLogo source={require("../../assets/logo.png")} />
    </HeaderContainer>
  );
};

export default Header;
