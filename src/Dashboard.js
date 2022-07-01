import styled from "styled-components";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import View from "./components/View";

export default () => (
  <Container>
    <SideBar />
    <div className="view-display">
      <NavBar />
      <View />
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 100vh;

  /* outline: 2px dashed orange; */

  .view-display {
    display: flex;
    flex-direction: column;

    flex: 1;
  }
`;
