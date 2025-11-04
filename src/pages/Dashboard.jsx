import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDashboard } from "../context/DashboardContext";
import StatsCard from "../components/dashboard/StatsCard";
import TransactionTable from "../components/dashboard/TransactionTable";
import useLiveData from "../hooks/useLiveData";
import { TrendingUp, TrendingDown, Wallet, List } from "lucide-react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const { summary, transactions } = useDashboard();
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Capture token from OAuth redirect once
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard", { replace: true }); // clean the URL
    }
  }, [location, navigate]);

  const token = localStorage.getItem("token");
  useLiveData(token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          Live Transaction Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-5">
        <StatsCard
          title="Total Income"
          value={`₹${summary?.totalIncome || 0}`}
          icon={<TrendingUp size={22} />}
        />
        <StatsCard
          title="Total Expense"
          value={`₹${summary?.totalExpense || 0}`}
          icon={<TrendingDown size={22} />}
        />
        <StatsCard
          title="Net Balance"
          value={`₹${summary?.netBalance || 0}`}
          icon={<Wallet size={22} />}
        />
        <StatsCard
          title="Transactions"
          value={summary?.transactionCount || 0}
          icon={<List size={22} />}
        />
      </div>

      {/* Transactions Table */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Recent Transactions
        </h2>
        <TransactionTable transactions={transactions} />
      </section>
    </div>
  );
}
