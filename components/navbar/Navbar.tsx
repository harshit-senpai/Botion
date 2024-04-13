import ActionButtons from "./_components/ActionButtons";
import Logo from "./_components/Logo";
import { Menu } from "./_components/Menu";

const Navbar = () => {
  return (
    <div className="flex py-8 px-4 items-center justify-between space-x-10 bg-white h-10 top-0 z-50 border-b border-gray-200 sticky">
      <div className="flex items-center justify-center">
        <Logo />
        <Menu />
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;
