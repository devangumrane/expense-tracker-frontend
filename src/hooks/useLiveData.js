import { useEffect } from "react";
import axios from "axios";
import { useDashboard } from "../context/DashboardContext";

export default function useLiveData(token) {
  const { setSummary, setTransactions } = useDashboard();

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };

        // ✅ 1. Fetch transactions
        const txRes = await axios.get("http://localhost:8080/api/v1/transaction", { headers });
        // Backend returns { success, data, count } — use .data safely
        setTransactions(Array.isArray(txRes.data.data) ? txRes.data.data : []);

        // ✅ 2. Fetch summary
        const sumRes = await axios.get("http://localhost:8080/api/v1/transaction/summary", { headers });
        // Backend returns { success, data }, not { summary }
        setSummary(sumRes.data.data || {});
      } catch (err) {
        console.error("❌ Error fetching live data:", err.response?.data || err.message);
      }
    };

    fetchData();

    // ⏱️ Re-fetch every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [token, setSummary, setTransactions]);
}
