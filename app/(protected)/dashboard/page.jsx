'use client'
import React from 'react'
import { redirect } from 'next/navigation'
import { useAuth } from '@/app/contexts/AuthContext'


function dashboardPage() {

    const {handleLogout, user} = useAuth()
    

    if(!user.name){
      redirect(`/${user.$id}`)
    }
    

  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <p>{user?.name}</p>
      <p>{user?.phone}</p>
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default dashboardPage