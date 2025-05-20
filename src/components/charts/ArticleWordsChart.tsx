import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

const data = [
  { title: "Improve Skills", words: 4575 },
  { title: "Last Hitting", words: 3480 },
  { title: "Teamplay Tips", words: 2676 },
  { title: "VA Services 2024", words: 2408 },
  { title: "Graphics Design", words: 1793 },
  { title: "Amazon Payments", words: 2647 },
  { title: "Backlinks 101", words: 2261 },
  { title: "AI SEO Tools", words: 1543 },
  { title: "Design Services Pro", words: 1974 },
];

export default function ArticleWordsChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Article Word Count</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 80, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="title" />
          <Tooltip />
          <Bar dataKey="words" fill="#8884d8">
            <LabelList dataKey="words" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
