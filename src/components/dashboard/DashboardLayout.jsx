// export default function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <aside className="w-64 bg-white p-4 shadow-md">
//         <h2 className="text-xl font-bold mb-6">Dashboard</h2>
//         <ul className="space-y-2 text-gray-600">
//           <li>Overview</li>
//           <li>Transactions</li>
//           <li>Settings</li>
//         </ul>
//       </aside>
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
