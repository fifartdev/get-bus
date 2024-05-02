'use client'
import React from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { redirect } from 'next/navigation'

function profilePage() {
    const { user, handleLogout } = useAuth()

    if(!user){
        redirect('/')
    }

  return (
    <div>
        <h1>Hello {user?.email} Fullfill Your Profile</h1>
        <p><button onClick={handleLogout} >Logout</button></p>
    
    
    </div>

  )
}

export default profilePage