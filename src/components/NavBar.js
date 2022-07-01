import styled from "styled-components";
import { ReactComponent as SearchBar } from "../assets/search-bar.svg";
import { ReactComponent as ProfileDetails } from "../assets/profile-details.svg";

export default () => (
  <Container>
    <div className="page-title">DASHBOARD</div>
    <SearchBar />
    <ProfileDetails />
  </Container>
);

const Container = styled.div`
  min-height: 80px !important;
  background: white;
  padding: 0 30px;

  display: flex;
  align-items: center;

  .page-title {
    font-weight: bold;
  }

  svg:first-of-type {
    margin: 0 80px 0 auto;
  }
`;
