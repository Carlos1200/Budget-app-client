import { NavButton } from "./NavButton";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <nav className=" w-full text-center flex flex-col">
        <NavButton to="/" icon={faRocket} />
      </nav>
    </div>
  );
};
