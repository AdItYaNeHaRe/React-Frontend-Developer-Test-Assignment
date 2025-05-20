import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r hidden md:block">
      <div className="p-4 text-xl font-bold">My Dashboard</div>
      <nav className="flex flex-col space-y-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-md mx-2 ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md mx-2 ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Reports
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md mx-2 ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Analytics
        </NavLink>
      </nav>
    </aside>
  );
}
