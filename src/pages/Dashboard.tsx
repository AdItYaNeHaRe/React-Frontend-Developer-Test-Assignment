import { useState } from "react";
import { DashboardTable } from "@/components/dashboard-table";

const tabs = [
  "Generated Articles",
  "Published Articles",
  "Scheduled Articles",
  "Archived Articles",
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Articles</h1>

      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg border border-b-0 ${
              activeTab === tab
                ? "bg-white text-blue-600 font-semibold"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="pt-4">
        <input
          type="text"
          placeholder="Search for Title & Keywords…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full max-w-sm focus:outline-none focus:ring"
        />
      </div>

      <DashboardTable filter={search} />
    </div>
  );
}
