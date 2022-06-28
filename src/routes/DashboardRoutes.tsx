import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components";
import { Dashboard } from "../pages";

export const DashboardRoutes = () => {
  return (
    <div className="bg-gray-200 h-screen w-full">
      <div className="grid grid-cols-12 gap-4 lg:h-full">
        <div className="col-span-12 lg:col-span-1 bg-primary  border-gray-300 py-2 lg:py-0">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-11">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
