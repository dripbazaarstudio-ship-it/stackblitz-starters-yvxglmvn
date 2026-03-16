import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import ProductCard from './ProductCard'

export default function HomePage({ onAddToCart, isLoading }) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProducts(data || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching products:', err)
    }
  }

  if (error) {
    return (
      <div className="bg-black text-white min-h-screen p-10 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
            onClick={fetchProducts}
            className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Shop Latest Drops</h2>
        <p className="text-zinc-400">Curated street wear collection</p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-400">Loading products...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}
