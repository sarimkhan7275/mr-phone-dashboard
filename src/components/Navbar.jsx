import { Menu } from "lucide-react";
import "./style/Navbar.css";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <header className="navbar">
      <button
        onClick={onToggleSidebar}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu size={22} />
      </button>
      <ul>
        <li className="active">Product</li>
        <li>Brands</li>
        <li>Category</li>
        <li>Batch</li>
        <li>Purchases</li>
        <li>Low Stock</li>
      </ul>
    </header>
  );
};

export default Navbar;
