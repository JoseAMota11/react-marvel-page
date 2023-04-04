import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar/Navbar';

const RootLayouts = () => (
  <div>
    <Navbar />
    <div className="center--section">
      <Outlet />
    </div>
  </div>
);

export default RootLayouts;
