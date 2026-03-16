import { formatPrice } from '../lib/utils'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-red-500 text-lg mb-4">{formatPrice(product.price)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white transition"
      >
        Add To Cart
      </button>
    </div>
  )
}
