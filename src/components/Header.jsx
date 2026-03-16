export default function Header({ cartCount, onCartClick, onAdminClick }) {
  return (
    <div className="flex justify-between items-center p-5 border-b border-zinc-800 bg-black">
      <h1 className="text-2xl font-bold text-red-500">DRIPBAZAAR</h1>
      <div className="space-x-4">
        <button
          onClick={onCartClick}
          className="text-white hover:text-red-500 transition"
        >
          Cart ({cartCount})
        </button>
        <button
          onClick={onAdminClick}
          className="text-white hover:text-red-500 transition"
        >
          Admin
        </button>
      </div>
    </div>
  )
}
