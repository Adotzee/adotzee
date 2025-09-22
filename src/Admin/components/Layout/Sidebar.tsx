import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  Building2,
  Plus,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'colleges', label: 'Colleges', icon: Building2 },
    { id: 'addons', label: 'Addons', icon: Plus },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out
      `}>
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Header */}
          <div className="relative p-8 border-b border-slate-700/50">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Adotzee</h1>
                <p className="text-sm text-slate-300">College Management</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 relative">
            <ul className="space-y-6 p-2">
              {menuItems.map(({ id, label, icon: Icon }) => {
                const to = `/admin/${id}`;
                const isActive = pathname.includes(id);

                return (
                  <li key={id} className="list-none">
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `
                        w-full flex items-center px-2 py-3.5 rounded-xl text-left transition-all duration-200 group
                        ${isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                          : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'}
                      `}
                    >
                      <div className={`
                        p-2 rounded-lg mr-3 transition-all duration-200
                        ${isActive
                          ? 'bg-white/20'
                          : 'bg-slate-700/50 group-hover:bg-slate-600/50'}
                      `}>
                        <Icon size={18} />
                      </div>
                      <span className="font-medium">{label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
