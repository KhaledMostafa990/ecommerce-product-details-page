import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Collections from './pages/Collections'
import Notfound from './pages/Notfound'
import Navigation from './features/Navigation'
import logo from './assets/logo.svg'
import CartIcon from './assets/icon-cart.svg'
import AvatarIcon from './assets/image-avatar.png'

function App() {

  return (
    <div className="App font-primary-sans">
      <Navigation data={navData} />
      <Routes>
        <Route path="/" element={<Navigate to={'/men'} replace />} />

        <Route path="/men" element={<ProductDetailsPage />} />
        <Route path="/women" element={<ProductDetailsPage />} />

        <Route path="/collections" element={<Collections />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App

// Nav Data 
const navData = {
  navListItems: ["collections", "men", "women", "about", "contact"],
  logoSrc: logo,
  cartSrc: CartIcon,
  avatarSrc: AvatarIcon
}