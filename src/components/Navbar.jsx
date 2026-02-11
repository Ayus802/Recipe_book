import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-green-600 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">
        🍽 Recipe Book
      </Link>
    </nav>
  );
};

export default Navbar;
