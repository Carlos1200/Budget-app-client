import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";

interface NavButtonProps {
  to: string;
  icon: IconProp;
  logout?: boolean;
}

export const NavButton = ({ to, icon, logout }: NavButtonProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <NavLink
      to={to}
      onClick={logout ? handleLogout : undefined}
      className={({ isActive }) =>
        `text-4xl mx-auto my-1 hover:text-quaternary transition-colors duration-200 ease-in-out ${
          isActive ? "text-quaternary" : "text-white"
        }`
      }
    >
      <FontAwesomeIcon icon={icon} />
    </NavLink>
  );
};
