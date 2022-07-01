import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import sideMenuBg from "../assets/side-menu-bg.png";

export default () => (
  <Container>
    <div className="logo">
      <Logo />
    </div>
  </Container>
);

const Container = styled.div`
  width: 292px;
  background: url(${sideMenuBg});
  border-right: 1px solid #e2e2ea;

  .logo {
    background-color: white;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 50px;
  }
`;
