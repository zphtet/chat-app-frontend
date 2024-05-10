import { LogOut, Settings } from "lucide-react";
import ThemeController from "./theme-controller";

const Header = () => {
  return (
    <header className=" flex items-center gap-4 justify-end py-1 px-4 h-[--header-h] bg-primary">
      <div className="avatar ">
        <div className="w-10 rounded-full ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <button className="btn btn-circle">
        <Settings />
      </button>
      <button className="btn btn-circle">
        <LogOut />
      </button>
      <ThemeController />
    </header>
  );
};

export default Header;
