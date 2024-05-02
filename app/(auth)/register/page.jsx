'use client'
import React, { useState} from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { redirect } from 'next/navigation'

function registerPage() {
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword]  = useState('')
    const [phone, setPhone] = useState('')

  return (
    <div>registerPage</div>
  )
}

export default registerPage