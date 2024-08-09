// pages/login.tsx
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'

const Login: React.FC = () => {
  const router = useRouter()
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    const envPassword = process.env.NEXT_PUBLIC_PASSWORD

    if (password === envPassword) {
      const authData = {
        authenticated: true,
        timestamp: new Date().getTime(),
      }
      localStorage.setItem('auth', JSON.stringify(authData)) // Store authentication status and timestamp
      router.push('/') // Redirect to the homepage
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-[white] py-2 rounded">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
