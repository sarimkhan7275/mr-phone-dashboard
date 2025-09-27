import { Eye, Pencil, Search, Filter } from "lucide-react";
import "./style/ProductTable.css";

const ProductTable = () => {
  const products = [
    { name: "Apple iPhone 16 Pro", category: "Mobile", buy: "€ 499.00", sell: "€ 699.00", stock: 28, status: "green" },
    { name: "Apple iPhone 15 Pro", category: "Mobile", buy: "€ 499.00", sell: "€ 699.00", stock: 28, status: "orange" },
    { name: "Apple iPhone 14 Pro Max", category: "Mobile", buy: "€ 499.00", sell: "€ 699.00", stock: 28, status: "green" },
    { name: "Apple iPhone 14 Pro", category: "Mobile", buy: "€ 499.00", sell: "€ 699.00", stock: 28, status: "red" },
    { name: "Apple iPhone 14 Pro", category: "Mobile", buy: "€ 499.00", sell: "€ 699.00", stock: 28, status: "green" },
    { name: "Apple iPhone 14 Pro", category: "Mobile", buy: "€ 499.00", sell: "€ 699.00", stock: 28, status: "orange" },
    { name: "Apple iPhone 14 Pro", category: "Mobile", buy: "€ 499.00", sell: "€ 699.00", stock: 28, status: "red" },
  ];

  return (
    <div className="product-table-wrapper">
      {/* Filters */}
      <div className="table-header">
        <div className="search-box">
          <Search size={16} color="#9ca3af" />
          <input type="text" placeholder="Search products by name, ID, or category" />
        </div>
        <button className="filter-btn">
          <Filter size={16} />
          Filters
        </button>
      </div>

      {/* Table */}
      <table className="product-table" >
        <thead>
          <tr>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>AVG. BUYING PRICE</th>
            <th>AVG. SELLING PRICE</th>
            <th>IN STOCK</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, idx) => (
            <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.buy}</td>
              <td>{p.sell}</td>
              <td>{p.stock}</td>
              <td>
                <span className={`status-dot ${p.status}`} />
              </td>
              <td className="actions">
                <button><Eye size={16}/></button>
                <button><Pencil size={16}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <span>Page 1 of 10</span>
        <div className="page-controls">
          <button className="page-btn">Previous</button>
          <button className="page-btn active">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
