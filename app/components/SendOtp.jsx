'use client'
import {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'


function SendOtp() {
  const [email, setEmail] = useState('')
  const { handleSendOtp, errors, loading } = useAuth()
  const router = useRouter()
  
  if(loading){
    return (<div className='flex justify-center max-h-screen'>
      <h1>Loading...</h1>
    </div>)
  }

  return (
    <>
    <form onSubmit={(e) => {
        handleSendOtp(e, email)
        setEmail('')
        router.push('/login')
    }
    } >
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
  </>
  
  )
}

export default SendOtp