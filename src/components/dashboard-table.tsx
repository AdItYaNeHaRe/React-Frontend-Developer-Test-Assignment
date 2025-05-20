import { motion } from "framer-motion";
import { FaWordpressSimple } from "react-icons/fa"; // install with `npm install react-icons`

export type Article = {
  id: number;
  title: string;
  keyword: string;
  traffic: number;
  words: number;
  createdOn: string;
};

const mockData: Article[] = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 2676,
    createdOn: "a day ago",
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant",
    traffic: 2900,
    words: 2408,
    createdOn: "1 Oct, 24",
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1793,
    createdOn: "---",
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: 3600,
    words: 2647,
    createdOn: "---",
  },
  {
    id: 7,
    title:
      "Backlinks 101: What are backlinks and why they’re important [Free template]",
    keyword: "backlinks",
    traffic: 8100,
    words: 2261,
    createdOn: "---",
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software",
    traffic: 880,
    words: 1543,
    createdOn: "---",
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1974,
    createdOn: "---",
  },
];

export function DashboardTable({ filter }: { filter: string }) {
  const filtered = mockData.filter(
    (a) =>
      a.title.toLowerCase().includes(filter.toLowerCase()) ||
      a.keyword.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <motion.div
      className="bg-white rounded-lg shadow p-4 overflow-x-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-700">
            <th className="px-4 py-2">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2">Article Title</th>
            <th className="px-4 py-2">Keyword [Traffic]</th>
            <th className="px-4 py-2">Words</th>
            <th className="px-4 py-2">Created On</th>
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2">Publish</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr
              key={item.id}
              className="border-t text-sm hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">
                {item.keyword} [{item.traffic.toLocaleString()}]
              </td>
              <td className="px-4 py-2">{item.words}</td>
              <td className="px-4 py-2">{item.createdOn}</td>
              <td className="px-4 py-2">
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
                  View
                </button>
              </td>
              <td className="px-4 py-2">
                <FaWordpressSimple className="text-2xl text-blue-600 hover:opacity-70 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div>Total {filtered.length} Article Titles</div>
        <div>
          Show{" "}
          <select className="border rounded px-2 py-1">
            {[10, 25, 50, 100].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>{" "}
          entries per page
        </div>
      </div>
    </motion.div>
  );
}
