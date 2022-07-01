import styled from "styled-components";

export default ({ perPage, setPerPage }) => (
  <Container>
    View
    <select
      className="per-page-selector"
      onChange={(e) => setPerPage(e.target.value)}
      value={perPage}
    >
      <option>5</option>
      <option>10</option>
      <option>15</option>
      <option>20</option>
    </select>
    per page
  </Container>
);

const Container = styled.div`
  .per-page-selector {
    padding: 7px 15px;
    border: 1px solid #dfe3e8;
    border-radius: 4px;
    margin: 0 10px;
  }
`;
