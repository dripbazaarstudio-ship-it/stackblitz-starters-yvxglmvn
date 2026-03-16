import { formatPrice } from '../lib/utils'

export default function CartPage({ cartItems, onRemoveItem, onContinue }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-400 mb-6">Your cart is empty</p>
          <button
            onClick={onContinue}
            className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-8">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 p-4 rounded-xl flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-red-500">{formatPrice(item.price)}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(idx)}
                  className="text-red-500 hover:text-red-400 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl mb-8">
            <div className="flex justify-between items-center mb-4">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="border-t border-zinc-800 pt-4 flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span className="text-red-500">{formatPrice(total)}</span>
            </div>
          </div>

          <div className="space-x-4">
            <button
              onClick={onContinue}
              className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition"
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  )
}
