import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from '../../pages/ProductsPage'
import ProductDetails from '../../pages/ProductDetails'


export const MainRouter = () => {
  return (
    <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/details" element={<ProductDetails />} />
    </Routes>
  )
}
