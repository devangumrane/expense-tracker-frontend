// src/utils/api.js
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";

export async function fetchSummary(token) {
  const res = await fetch(`${BASE_URL}/transaction/summary`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch summary");
  return res.json();
}

export async function fetchTransactions(token) {
  const res = await fetch(`${BASE_URL}/transaction`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch transactions");
  return res.json();
}
