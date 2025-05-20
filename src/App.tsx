import Sidebar from "@/components/sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Reports from "@/pages/Reports";
import Analytics from "@/pages/Analytics";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
}
