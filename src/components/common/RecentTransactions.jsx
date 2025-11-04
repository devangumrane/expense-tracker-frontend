export default function RecentTransactions({ transactions }) {
  if (!transactions.length)
    return <p className="text-gray-500">No transactions yet.</p>;

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Description</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.slice(0, 5).map((t) => (
            <tr key={t._id} className="border-b hover:bg-gray-50">
              <td className="p-2">{new Date(t.date).toLocaleDateString()}</td>
              <td className="p-2">{t.description}</td>
              <td className="p-2 capitalize">{t.type}</td>
              <td
                className={`p-2 font-medium ${
                  t.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
