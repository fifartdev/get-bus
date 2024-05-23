'use client'
import React from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { redirect } from 'next/navigation'

function layoutProtected({children}) {

    const { user } = useAuth()

    if(!user){
        redirect('/')
    }

  return (
    <div className='flex justify-center items-center min-h-full align-middle'>{children}</div>
  )
}

export default layoutProtected