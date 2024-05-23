'use client'
import {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'


function Login() {
  const [secret,setSecret] = useState('')
  const { handleLogin, handleSendOtp, errors, loading } = useAuth()
  const router = useRouter()

  if(loading){
    return (<div className='flex justify-center max-h-screen'>
      <h1>Loading...</h1>
    </div>)
  }

  return (
    <div>

      <form onSubmit={(e) => {
          handleLogin(e,secret)
          setSecret('')
          } }>
      <div className={"mb-6"}>
          <label htmlFor="secret">Κωδικός</label>
          <input
            type="number"
            id="secret"
            placeholder='- - - - - -'
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            required
            className="border-black border-b-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        
      </form>
      <p>Did not come the OTP? Wait a few seconds. Check SPAM/JUNK folder or</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>router.push('/otp')} >Try Again</button>
    </div>

  )
}

export default Login