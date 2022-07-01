import styled from "styled-components";

import cardTopIcon from "../assets/card-top-icon.svg";

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export default ({ summary }) => (
  <Container>
    <Card
      title="Total loan collected"
      value={"₦" + (summary?.total_loan_collected ?? 0).toLocaleString()}
    />
    <Card
      title="Total loan repayed"
      value={"₦" + (summary?.total_loan_repayed ?? 0).toLocaleString()}
    />
    <Card
      title="Repayment Due"
      value={"₦" + (summary?.repayment_due ?? 0).toLocaleString()}
    />
    <Card
      title="Pending loans"
      value={(summary?.pending_loans ?? 0).toLocaleString()}
    />
    <Card
      title="Approved loans"
      value={(summary?.approved_loans ?? 0).toLocaleString()}
    />
    <Card
      title="Total No of clusters"
      value={(summary?.total_clusters ?? 0).toLocaleString()}
    />
    <Card
      title="Total no of customers"
      value={(summary?.total_customers ?? 0).toLocaleString()}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .card {
    position: relative;
    padding: 33px 26px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #e2e2ea;
    width: 300px;
    text-align: left;

    &::after {
      content: url(${cardTopIcon});
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .title {
      color: #75759e;
      font-size: 14px;
    }

    .value {
      color: #171725;
      font-size: 24px;
      margin-top: 10px;
    }
  }
`;
