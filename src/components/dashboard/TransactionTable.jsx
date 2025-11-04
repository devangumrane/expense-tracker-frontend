export default function TransactionTable({ transactions = [] }) {
  if (!Array.isArray(transactions)) {
    console.warn("⚠️ Expected transactions array, got:", transactions);
    return <p>No transaction data available</p>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{new Date(tx.date).toLocaleDateString()}</td>
                <td className="px-4 py-2">{tx.category?.displayName || "N/A"}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    tx.transactionType === "INCOME"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {tx.transactionType}
                </td>
                <td className="px-4 py-2 text-right font-semibold">
                  ₹{tx.amount.toLocaleString("en-IN")}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-400">
                No transactions yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
