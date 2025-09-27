import "./style/Navbar.css"

const Navbar = () => {
  return (
    <header className="navbar">
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
