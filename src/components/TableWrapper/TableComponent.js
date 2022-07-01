// import { useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

import arrow from "../../assets/rounded-arrow.svg";

export default ({
  tableItems = [],
  page,
  setPage,
  perPage,
  setPerPage,
  numberOfPages
}) => {
  // const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(10);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Cluster ID</th>
            <th>Cluster name</th>
            <th>Cluster lead</th>
            <th>Cluster score</th>
            <th>Members</th>
            <th>Cummulative loan limit</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.lead}</td>
              <td>{item.score}</td>
              <td>{item.members}</td>
              <td>{item.cummilative_loan_limit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination {...{ page, setPage, perPage, setPerPage, numberOfPages }} />
    </Container>
  );
};

const Container = styled.div`
  border-radius: 20px;
  border: 1px solid #e2e2ea;
  overflow: hidden;
  margin-top: 30px;

  background-color: white;

  table {
    width: 100%;
    text-align: left;
    border: none;
    border-collapse: collapse;

    thead {
      color: #75759e;
      background: #f0f2f4;

      th {
        font-weight: 400;
        padding: 24px;
      }
    }

    tbody {
      color: #4b545a;
      background: white;

      tr {
        position: relative;

        &::after {
          content: url(${arrow});
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
        }

        &:nth-of-type(2n) {
          background: #f9fafb;
        }
      }

      td {
        font-weight: 400;
        padding: 24px;

        &:last-of-type {
          font-weight: 600;
        }
      }
    }
  }
`;
