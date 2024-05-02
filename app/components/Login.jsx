'use client'
import {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'


function Login() {
  const [email, setEmail] = useState('')
  const [secret,setSecret] = useState('')
  const [hidden,setHidden] = useState(false)
  const { handleLogin, handleSendOtp } = useAuth()
  

  return (
    <>
    <form onSubmit={(e) => {
        handleSendOtp(e, email) 
        setHidden(true)
    }
    } className={hidden ? 'hidden' : null}>
      <div className={"mb-6"}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
          className="border-black border-b-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send OTP</button>
    </form>

    <form onSubmit={(e) => {
        handleLogin(e,secret)
        setEmail('')
        setSecret('')
        } } className={!hidden ? 'hidden' : null}>
    <div className={"mb-6"}>
        <label htmlFor="secret">Κωδικός</label>
        <input
          type="number"
          id="secret"
          placeholder='* * * * * *'
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          required
          className="border-black border-b-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
    </form>
  </>
  
  )
}

export default Login