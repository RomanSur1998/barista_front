import styles from "./Pagination.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../../redux/slices/ordersSlice";

export const Pagination = () => {
  const { pageNumber } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  function nextPage() {
    if (pageNumber < pageNumbers.length) {
      dispatch(setPageNumber(pageNumber + 1));
    }
  }
  function prevPage() {
    if (pageNumber > 1) {
      dispatch(setPageNumber(pageNumber - 1));
    }
  }

  function setPage(page) {
    dispatch(setPageNumber(page));
  }

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={styles.paginationContainer}>
      <button
        className={classnames(styles.button)}
        style={
          pageNumber !== 1
            ? {
                backgroundColor: "#35536B",
                color: "#fff",
                transition: "0.3s",
              }
            : null
        }
        onClick={prevPage}
      >
        {"<"}
      </button>
      {pageNumbers.map((pageNum) => (
        <button
          className={classnames(
            { [styles.active]: pageNumber === pageNum },
            styles.button
          )}
          value={pageNum}
          onClick={() => setPage(pageNum)}
          key={pageNum}
        >
          {pageNum}
        </button>
      ))}
      <button
        onClick={nextPage}
        className={classnames(styles.button)}
        style={
          pageNumber !== pageNumbers[pageNumbers.length - 1]
            ? {
                backgroundColor: "#35536B",
                color: "#fff",
                transition: "0.3s",
              }
            : null
        }
        // disabled={pageNumber === totalPageCount}
      >
        {">"}
      </button>
    </div>
  );
};
