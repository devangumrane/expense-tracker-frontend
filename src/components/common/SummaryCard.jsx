export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl text-center">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
