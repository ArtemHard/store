import { HeaderStyled, LogoContainer, Logo, LogoTitle } from "./header.styles";
import { NavMenu } from "./NavMenu/NavMenu";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoContainer>
        <Logo />
        <LogoTitle>NameCompany</LogoTitle>
      </LogoContainer>
      <NavMenu />
      <div style={{ color: "red", display: "flex", gap: "2%" }}>
        <h3>Иконка Профиля</h3>
        <h3>Иконка Корзины</h3>
      </div>
      <div style={{ display: "none" }}>
        <h2 style={{ color: "red" }}>Burger</h2>
      </div>
    </HeaderStyled>
  );
};

export default Header;
