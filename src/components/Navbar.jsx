import { Fish } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <NavLink to="/" className="flex items-center space-x-2">
        <Fish className="h-6 w-6" />
        <span className="text-xl font-bold">FishWorld</span>
      </NavLink>
      <ul className="flex space-x-4">
        <li><NavLink to="/" className="hover:text-blue-200">Home</NavLink></li>
        <li><NavLink to="/species" className="hover:text-blue-200">Species</NavLink></li>
        <li><NavLink to="/habitats" className="hover:text-blue-200">Habitats</NavLink></li>
        <li><NavLink to="/conservation" className="hover:text-blue-200">Conservation</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
