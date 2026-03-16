import { useState } from 'react'

export default function AdminLogin({ onLogin, onCancel }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const correctPassword = new Date().getHours().toString()

  function handleLogin() {
    if (username === '00' && password === correctPassword) {
      onLogin()
    } else {
      setError('Invalid credentials')
      setPassword('')
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-8">Admin Login</h2>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="00"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password (Current Hour)</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div className="space-x-4">
          <button
            onClick={handleLogin}
            className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Login
          </button>
          <button
            onClick={onCancel}
            className="bg-zinc-700 px-6 py-2 rounded-xl hover:bg-zinc-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
