import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import CartPage from './components/CartPage'
import AdminLogin from './components/AdminLogin'
import AdminPanel from './components/AdminPanel'
import { getSessionId } from './lib/utils'

export default function App() {
  const [page, setPage] = useState('home')
  const [cartItems, setCartItems] = useState([])
  const [adminLogged, setAdminLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('dripbazaar_cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dripbazaar_cart', JSON.stringify(cartItems))
  }, [cartItems])

  function handleAddToCart(product) {
    setCartItems([...cartItems, product])
  }

  function handleRemoveItem(index) {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  if (adminLogged) {
    return (
      <>
        <Header
          cartCount={cartItems.length}
          onCartClick={() => setPage('cart')}
          onAdminClick={() => setAdminLogged(false)}
        />
        <AdminPanel
          cartCount={cartItems.length}
          onLogout={() => {
            setAdminLogged(false)
            setPage('home')
          }}
        />
      </>
    )
  }

  if (page === 'admin') {
    return (
      <AdminLogin
        onLogin={() => {
          setAdminLogged(true)
        }}
        onCancel={() => setPage('home')}
      />
    )
  }

  if (page === 'cart') {
    return (
      <>
        <Header
          cartCount={cartItems.length}
          onCartClick={() => setPage('cart')}
          onAdminClick={() => setPage('admin')}
        />
        <CartPage
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
          onContinue={() => setPage('home')}
        />
      </>
    )
  }

  return (
    <>
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setPage('cart')}
        onAdminClick={() => setPage('admin')}
      />
      <HomePage
        onAddToCart={handleAddToCart}
        isLoading={isLoading}
      />
    </>
  )
}
