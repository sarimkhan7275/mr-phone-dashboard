import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useProducts } from "../components/context/ProductsContext";

const ProductDetails = () => {
  const { activeProduct } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeProduct) {
      navigate("/products");
    }
  }, [activeProduct, navigate]);

  if (!activeProduct) return null;

  const { brandName, modelName, suffix, category, ram, storage, variants } = activeProduct;
  const name = [brandName, modelName, suffix].join(" ");


  console.log(name)

  return (
    <div className="product-details-page"  >
      <button className="back-link" onClick={() => navigate("/products")}>
        ← Back to Products
      </button>

      <div style={{backgroundColor : "white", borderRadius : "20px", padding : "20px"}} >
      <h2 className="page-title">Product Details</h2>
      <p className="page-subtitle">Complete information about {name}</p>

      {/* Main card */}
      <div className="detail-card">
        <div className="detail-header">
          <h3>{name}</h3>
          <span className="status-badge green">In Stock</span>
        </div>
        <p className="meta-line">
          Category: {category} • RAM: {ram || "-"} • Storage: {storage || "-"}
        </p>

        <div className="detail-stats">
          <div>
            <h4 className="blue">€ 499.00</h4>
            <span>Average Buying Price</span>
          </div>
          <div>
            <h4 className="blue">€ 699.00</h4>
            <span>Average Selling Price</span>
          </div>
          <div>
            <h4>28</h4>
            <span>In Stock</span>
          </div>
          <div>
            <h4>€ 8550.00</h4>
            <span>Total Value</span>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="detail-card">
        <h4>Variant Features</h4>
        <div className="variants-list">
          {variants?.length ? (
            variants.map((v, i) => (
              <div key={i} className="variant-item">
                <span>{v.name}</span>
                <strong>{v.value}</strong>
              </div>
            ))
          ) : (
            <p className="empty-msg">No variants added</p>
          )}
        </div>
      </div>

      {/* Stock History */}
      <div className="detail-card">
        <h4>Stock History</h4>
        <div className="empty-state">
          <span className="empty-icon">!</span>
          <p className="empty-msg">No stock history available for this product.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
