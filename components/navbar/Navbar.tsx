import Logo from "./_components/Logo";
import { Menu } from "./_components/Menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
