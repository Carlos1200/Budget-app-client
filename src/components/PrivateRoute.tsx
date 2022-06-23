import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";

export const PrivateRoute = () => {
  const { status } = useSelector((state: RootState) => state.auth);

  return status === "authenticated" ? <Outlet /> : <Navigate to="/login" />;
};
