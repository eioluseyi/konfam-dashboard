import styled from "styled-components";
import { ReactComponent as DateRange } from "../assets/date-range.svg";
import TableWrapper from "./TableWrapper";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getData } from "../api";
import OverviewCards from "./OverviewCards";

export default () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [tableItems, setTableItems] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    getData({ page: page, perPage })
      .then((res) => {
        setSummary(res?.data?.response?.summary);
        setNumberOfPages(
          Math.ceil(res?.data?.response?.cluster?.totalCount / perPage)
        );
        setTableItems(res?.data?.response?.cluster?.items);
      })
      .catch((err) =>
        toast.error(err?.response?.data?.message ?? "An error occured")
      );
  }, [page, perPage]);

  return (
    <>
      <Container>
        <div className="date-range">
          <DateRange />
        </div>
        <OverviewCards summary={summary} />
        <TableWrapper
          {...{
            tableItems,
            page,
            setPage,
            perPage,
            setPerPage,
            numberOfPages,
            setNumberOfPages,
            setTableItems
          }}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  flex: 1;
  padding: 35px 80px 35px 50px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  .date-range {
    text-align: left;
  }

  svg {
    &:first-of-type {
      margin-bottom: 35px;
      height: 70px;
    }
  }
`;
