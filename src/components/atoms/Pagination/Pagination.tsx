import addConditionalClassName from '../../../helpers/addConditionalClassName';
import { DOTS } from '../../../helpers/constants';
import usePagination from '../../../hooks/usePagination';

type PaginationType = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className: string;
};

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  className,
}: PaginationType) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (Array.isArray(paginationRange)) {
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  }

  const lastPage =
    paginationRange !== undefined &&
    paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div
      className={addConditionalClassName('pagination-container', {
        [className]: className,
      })}
    >
      <button
        type="button"
        className={addConditionalClassName('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        Back
      </button>
      {Array.isArray(paginationRange) &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <button
                key={totalCount}
                type="button"
                className="pagination-item dots"
              >
                &#8230;
              </button>
            );
          }
          return (
            <button
              type="button"
              key={pageNumber}
              className={addConditionalClassName('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(parseInt(`${pageNumber}`, 10))}
            >
              {pageNumber}
            </button>
          );
        })}
      <button
        type="button"
        className={addConditionalClassName('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
