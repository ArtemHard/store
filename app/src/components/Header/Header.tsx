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
        <LogoTitle>LOGO</LogoTitle>
      </LogoContainer>
      <Navigation>
        <NavigationItem>
          <NavigationLink to='/'>Ссылка куда-то</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to='/'>Ссылка куда-то</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to='/'>Ссылка куда-то</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to='/'>Ссылка куда-то</NavigationLink>
        </NavigationItem>
      </Navigation>
      <div>
        <h2 style={{ color: "red" }}>Burger</h2>
      </div>
    </HeaderStyled>
  );
};

export default Header;
