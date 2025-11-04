export default function StatsCard({ title, value, icon }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl px-5 py-6 w-52 hover:shadow-lg transition-all">
      <div className="mb-2 text-blue-600">{icon}</div>
      <h4 className="text-gray-500 text-sm font-medium">{title}</h4>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
