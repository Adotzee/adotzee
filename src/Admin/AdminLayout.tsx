import { Outlet } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar/>
      <div className="flex-1">
        <main className="p-4 lg:p-8">
          <Outlet /> {/* Nested route content will render here */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
