import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Wallet, Settings } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { to: "/dashboard", label: "Overview", icon: <LayoutDashboard size={18} /> },
    { to: "/transactions", label: "Transactions", icon: <Wallet size={18} /> },
    { to: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between border-r border-gray-100">
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-8 tracking-tight">💰 MyFinance</h2>
        <nav className="flex flex-col gap-3">
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 font-medium transition 
                ${
                  location.pathname === to
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50 hover:text-blue-500"
                }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="text-xs text-gray-400 mt-6 text-center">v1.0.0</p>
    </aside>
  );
}
