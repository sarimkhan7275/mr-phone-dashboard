import { Box, Layers, Tag, Plus } from "lucide-react"
import "./style/ProductSummary.css";


  const stats = [
    {
      label: "Total Products",
      value: 46,
      icon: <Box size={20} color="#3b82f6" />,
      bg: "#e0ebff",
    },
    {
      label: "Total Stock",
      value: 26,
      icon: <Layers size={20} color="#0ea5e9" />,
      bg: "#d6f0fb",
    },
    {
      label: "Total Inventory Value",
      value: "€8915.2",
      icon: <Layers size={20} color="#fbbf24" />,
      bg: "#fef3c7",
    },
    {
      label: "Selling Price",
      value: "€6520.15",
      icon: <Tag size={20} color="#22c55e" />,
      bg: "#dcfce7",
    },
  ];

const ProductSummary = ({setModalOpen}) => {




  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Products</h2>
          <p className="subtitle">
            Manage your product catalog and inventory levels.
          </p>
        </div>


        <>
          <button className="add-btn" onClick={() => setModalOpen(true)}>
            <Plus size={16} strokeWidth={2.2} />
            Add Product
          </button>
        </>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {stats.map((s, i) => (
          <div className="summary-card">
            <div className="card-text">
              <span className="card-label">{s.label}</span>
              <h3 className="card-value">{s.value}</h3>
            </div>
            <div className="card-icon" style={{ backgroundColor: s.bg }}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSummary;
