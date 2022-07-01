import styled from "styled-components";
import TableComponent from "./TableComponent";

// import toast

export default ({
  tableItems,
  page,
  setPage,
  perPage,
  setPerPage,
  numberOfPages,
  setNumberOfPages,
  setTableItems
}) => {
  return (
    <Container>
      <div className="top-bar">
        <span>All Clusters</span>
        <span>View All</span>
      </div>
      <TableComponent
        {...{ tableItems, page, setPage, perPage, setPerPage, numberOfPages }}
      />
    </Container>
  );
};

const Container = styled.div`
  font-size: 16px;

  .top-bar {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    span:last-of-type {
      text-decoration-line: underline;
      color: #08ccad;
    }
  }
`;
