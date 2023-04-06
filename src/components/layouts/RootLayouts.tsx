import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar/Navbar';
// import Pagination from '../atoms/Pagination/Pagination';

const RootLayouts = () => (
  <div>
    <Navbar />
    <div className="center--section">
      <Outlet />
    </div>
    {/* <Pagination
        className="pagination-bar"
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
        siblingCount={1}
        pageSize={10}
      /> */}
  </div>
);

export default RootLayouts;
