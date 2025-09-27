import { useState } from "react"
import { Upload } from "lucide-react"
import "./style/AddProductModal.css"

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {

  const [category, setCategory] = useState("mobile")
  const [brandName, setBrandName] = useState("")
  const [modelName, setModelName] = useState("")
  const [suffix, setSuffix] = useState("")
  const [ram, setRam] = useState("")
  const [storage, setStorage] = useState("")
  const [newDevice, setNewDevice] = useState(false)
  const [usedDevice, setUsedDevice] = useState(false)
  const [variants, setVariants] = useState([
    { id: Date.now(), name: "", value: "" },
  ])


  // handle varint changes
  const handleVariantChange = (id, field, value) => {
    setVariants((prev) =>
      prev.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    )
  }

  const addVariant = () => {
    setVariants((prev) => [...prev, { id: Date.now(), name: "", value: "" }])
  }

  const removeVariant = (id) => {
    setVariants((prev) => prev.filter((v) => v.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const product = {
      id: Date.now(),
      category,
      brandName,
      modelName,
      suffix,
      ram,
      storage,
      newDevice,
      usedDevice,
      variants,
    }  
    onAddProduct(product)

    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={handleSubmit}>
        {/* header */}
        <div className="modal-header">
          <h2>Add New Product</h2>
          <p>Fill in the product details below</p>
        </div>

        {/* form */}
        <div className="modal-body">
          <div className="form-grid">
            {/* category */}
            <div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label>Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="mobile">Mobile</option>
                  <option value="accessory">Accessory</option>
                </select>
              </div>

              {/* Brand name */}
              <div className="form-group">
                <label>Brand Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Apple"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
            </div>

            {/* dummy image */}
            <div className="form-group upload">
              <label>Thumbnail Image</label>
              <div className="upload-box">
                <Upload size={20} color="#2563eb" />
                <span>The image should be JPG, PNG, WEBP format</span>
              </div>
            </div>

            {/* model name */}
            <div className="form-group">
              <label>Model Name *</label>
              <input
                type="text"
                placeholder="e.g. iPhone 14 Pro"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
              />
            </div>

            {/* suffix */}
            <div className="form-group">
              <label>Suffix</label>
              <input
                type="text"
                placeholder="e.g. Pro Max"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
              />
            </div>

            {/* RAM */}
            <div className="form-group">
              <label>RAM</label>
              <input
                type="text"
                placeholder="e.g. 8GB"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
              />
            </div>

            {/* storage */}
            <div className="form-group">
              <label>Storage</label>
              <input
                type="text"
                placeholder="e.g. 256GB"
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
              />
            </div>

            {/* Device Type */}
            <div className="form-group checkbox-row">
              <label
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <input
                  type="checkbox"
                  checked={newDevice}
                  onChange={(e) => setNewDevice(e.target.checked)}
                />
                New Device
              </label>
              <label
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <input
                  type="checkbox"
                  checked={usedDevice}
                  onChange={(e) => setUsedDevice(e.target.checked)}
                />
                Used Device
              </label>
            </div>

            {/* Variant and Features */}
            <div className="form-group variant-row">
              <div style={{display:"flex", justifyContent:"space-between", alignItems : "center", marginBottom : "20px"}} > 
                <label style={{fontSize : "16px"}} >Variant Features</label>
                <button
                  type="button"
                  className="variant-btn"
                  onClick={addVariant}
                >
                  + Add Variant
                </button>
              </div>
              <div className="variant-list">
                {variants.map((v) => (
                  <div key={v.id} className="variant-item">
                    <input
                      type="text"
                      placeholder="Feature name (e.g. Color)"
                      value={v.name}
                      onChange={(e) =>
                        handleVariantChange(v.id, "name", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Feature value (e.g. Black)"
                      value={v.value}
                      onChange={(e) =>
                        handleVariantChange(v.id, "value", e.target.value)
                      }
                    />
                    <button type="button" onClick={() => removeVariant(v.id)}>
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="add-btn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProductModal
