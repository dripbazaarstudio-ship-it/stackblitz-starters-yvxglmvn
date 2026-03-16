import { useState } from 'react'

export default function AdminPanel({ cartCount, onLogout }) {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-8">DripBazaar Admin Panel</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3 className="text-zinc-400 text-sm mb-2">Total Cart Items</h3>
          <p className="text-4xl font-bold text-red-500">{cartCount}</p>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition"
      >
        Back to Shop
      </button>
    </div>
  )
}
