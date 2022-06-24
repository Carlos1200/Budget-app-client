import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading, PrivateRoute } from "./components";
import { AUTHUSER_QUERY } from "./graphql";
import { User } from "./interface";
import { Dashboard, Login, Page404, Register } from "./pages";
import { DashboardRoutes } from "./routes/DashboardRoutes";
import { RootState } from "./store";
import { clearUser, setUser } from "./store/slices/auth";

function App() {
  const { loading } = useQuery<{ getAuthUser: User }>(AUTHUSER_QUERY, {
    onError(error) {
      dispatch(clearUser());
    },
    onCompleted(data) {
      dispatch(setUser(data.getAuthUser));
    },
  });
  const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="bg-secondary h-screen">
        <div className="flex justify-center items-center h-full">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
