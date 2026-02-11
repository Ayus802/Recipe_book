import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-white/70 backdrop-blur-md shadow-md p-4 flex justify-between items-center"
    >
      <Link to="/" className="text-2xl font-bold text-orange-500 align-middle">
        <img src="https://img.freepik.com/premium-vector/eat-food-restaurant-icon-orange-color-design_1178600-1070.jpg" alt="" className="size-9 inline mr-2"/> Recipe Book
      </Link>
    </motion.nav>
  );
};

export default Navbar;
