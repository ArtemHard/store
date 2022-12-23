import {
  HeaderStyled,
  LogoContainer,
  Logo,
  LogoTitle,
  Navigation,
  NavigationItem,
  NavigationLink,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoContainer>
        <Logo />
        <LogoTitle>NameCompany</LogoTitle>
      </LogoContainer>
      <Navigation>
        <NavigationItem>
          <NavigationLink to='/'>Главная</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to='/'>Каталог</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to='/'>Контакты</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to='/'>О нас</NavigationLink>
        </NavigationItem>
      </Navigation>
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
