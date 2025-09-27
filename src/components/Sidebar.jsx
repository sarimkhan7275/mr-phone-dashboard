import { useState } from "react";
import {
  LayoutGrid,
  ShoppingCart,
  Box,
  TrendingUp,
  Package,
  Users,
  Store,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import "./style/Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("products");

  const menu = [
    { key: "dashboard", label: "Dashboard", icon: LayoutGrid },
    { key: "pos", label: "POS", icon: ShoppingCart },
    { key: "products", label: "Products", icon: Box },
    { key: "sales", label: "Sales", icon: TrendingUp },
    { key: "inventory", label: "Inventory", icon: Package },
    { key: "customers", label: "Customers", icon: Users },
    { key: "vendors", label: "Vendors", icon: Store },
    { key: "finance", label: "Finance", icon: BarChart3 },
    { key: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="sidebar" style={{minWidth : "250px"}}>
      {/* Logo */}
      <div className="top">
        <div style={{height : "100px"}} >
          <img style={{height:"100%", width:"100%", objectFit:"contain"}} src="/logo.png" alt="" />
        </div>

        {/* Profile */}
        <div className="profile-card">
          <div className="avatar">FK</div>
          <div className="meta">
            <div className="name">Faiz Khan</div>
            <div className="role">Admin</div>
          </div>
        </div>

        {/* Menu */}
        <nav className="menu">
          <ul>
            {menu.map((m) => {
              const isActive = active === m.key;
              const Icon = m.icon;
              return (
                <li
                  key={m.key}
                  className={`menu-item ${isActive ? "active" : ""}`}
                  onClick={() => setActive(m.key)}
                >
                  <div className="icon-wrap">
                    <Icon size={18} strokeWidth={1.8} color={isActive ? "#fff" : "#6b7280"} />
                  </div>
                  <span className="label">{m.label}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Sign Out */}
      <div className="bottom">
        <button className="signout">
          <LogOut size={18} strokeWidth={1.8} color="#e14b4b" />
          <span className="signout-text">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
