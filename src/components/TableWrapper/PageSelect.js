import { useState } from "react";
import styled from "styled-components";

function PaginationButton({
  active,
  title,
  value,
  clickInput,
  numberOfPages,
  page,
  setPage,
  children
}) {
  const [showInput, setShowInput] = useState(false);

  const sanitizeValue = (val) => {
    if (isNaN(val)) return page;
    if (val < 0) return page;
    if (val > numberOfPages + 1) return page;
    return val - 1;
  };

  if (numberOfPages <= 1) return null;

  return (
    <div
      className={`page-item ${active && "active"}`}
      onClick={() => {
        (value || value === 0) && setPage(value);
        clickInput && setShowInput(true);
      }}
    >
      {showInput ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPage(sanitizeValue(e.target[0].value));
            setShowInput(false);
          }}
        >
          <input
            className="page-input"
            autoFocus
            onBlur={() => setTimeout(() => setShowInput(false), 200)}
          />
          <button type="submit" hidden></button>
        </form>
      ) : (
        children ?? title
      )}
    </div>
  );
}

export default ({ numberOfPages = 1, page, setPage }) => {
  const showPrevNext = numberOfPages > 5;
  const renderPages = showPrevNext ? 3 : numberOfPages;
  const showStartNumbers = page < renderPages;
  const showEndNumbers = page >= numberOfPages - renderPages;

  return (
    <Container>
      PAGE {page + 1} OF {numberOfPages}
      <PaginationButton value={page > 0 ? page - 1 : page} setPage={setPage}>
        &lt;
      </PaginationButton>
      {showStartNumbers &&
        new Array(renderPages)
          .fill(1)
          .map((_, i) => (
            <PaginationButton
              key={i}
              active={i === page}
              value={i}
              title={i + 1}
              setPage={setPage}
            />
          ))}
      {!showStartNumbers && (
        <>
          <PaginationButton value={0} title={1} setPage={setPage} />
          <PaginationButton clickInput={!true} setPage={setPage}>
            ...
          </PaginationButton>
        </>
      )}
      {!showStartNumbers && !showEndNumbers && (
        <PaginationButton active={true} title={page + 1} setPage={setPage} />
      )}
      {!showEndNumbers && (
        <>
          <PaginationButton clickInput={!true} setPage={setPage}>
            ...
          </PaginationButton>
          <PaginationButton
            active={page === numberOfPages - 1}
            value={numberOfPages - 1}
            title={numberOfPages}
            setPage={setPage}
          />
        </>
      )}
      {showEndNumbers &&
        new Array(renderPages).fill(1).map((_, i) => {
          const startCount = numberOfPages - renderPages;
          return (
            <PaginationButton
              key={i}
              active={i + startCount === page}
              value={i + startCount}
              title={i + startCount + 1}
              setPage={setPage}
            />
          );
        })}
      <PaginationButton
        value={page !== numberOfPages - 1 ? page + 1 : page}
        setPage={setPage}
      >
        &gt;
      </PaginationButton>
    </Container>
  );
};

const Container = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 16px;

  .page-item {
    border: 1px solid #dfe3e8;
    border-radius: 4px;
    height: 32px;
    width: 32px;
    cursor: pointer;
    user-select: none;

    font-weight: 600;
    color: #212b36;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s ease-in-out;

    &.active {
      font-weight: 700;
      color: #08ccad;
      border-color: #08ccad;
    }

    &:not(.active):hover {
      border-color: black;
      transition: border-color 0s ease-in-out;
    }
  }

  .page-input {
    outline: none;
    border: none;
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`;
