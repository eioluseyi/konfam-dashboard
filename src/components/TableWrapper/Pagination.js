import styled from "styled-components";
import PageSelect from "./PageSelect";
import PerPageSelect from "./PerPageSelect";

export default ({ numberOfPages, page, setPage, perPage, setPerPage }) => (
  <Container>
    <PageSelect {...{ numberOfPages, page, setPage }} />
    <PerPageSelect {...{ perPage, setPerPage }} />
  </Container>
);

const Container = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  color: #9097a5;
  font-weight: 400;
  font-size: 14px;
`;
