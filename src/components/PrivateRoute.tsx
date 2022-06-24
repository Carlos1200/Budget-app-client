import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";

interface Props {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
  const { status } = useSelector((state: RootState) => state.auth);

  return status === "authenticated" ? children : <Navigate to="/login" />;
};
