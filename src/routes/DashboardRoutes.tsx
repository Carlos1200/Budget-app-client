import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components";
import { Budget, Dashboard, Page404 } from "../pages";

export const DashboardRoutes = () => {
  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="grid grid-cols-12 lg:h-full">
        <div className="col-span-12 py-2 border-gray-300 lg:col-span-1 bg-primary lg:py-0">
          <Sidebar />
        </div>
        <div className="col-span-12 overflow-auto lg:col-span-11">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/budget/:id" element={<Budget />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
