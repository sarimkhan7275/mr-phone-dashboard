import { useState } from "react";
import ProductSummary from "../components/ProductSummary";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import { useProducts } from "../components/context/ProductsContext";

const ProductsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { saveProduct } = useProducts();
  const navigate = useNavigate();

  const handleAddProduct = (product) => {
    saveProduct(product);       
    setModalOpen(false);
    navigate("/products/details"); 
  };

  return (
    <div className="products-page" style={{backgroundColor : "#f5f6fa", padding : "20px"}} >
      <ProductSummary setModalOpen={setModalOpen} />
      <ProductTable products={[]} onView={() => {}} />

      <AddProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default ProductsPage;
