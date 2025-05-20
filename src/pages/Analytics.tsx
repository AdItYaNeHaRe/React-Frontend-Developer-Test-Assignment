import SalesChart from "@/components/charts/SalesChart";
import ArticleWordsChart from "@/components/charts/ArticleWordsChart";

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <SalesChart />
      <ArticleWordsChart />
    </div>
  );
}
