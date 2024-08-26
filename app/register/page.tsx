import { authOptions } from '@/auth'
import PricingCards from '@/components/PricingCards'
import { getServerSession } from 'next-auth'
import React from 'react'

async function Register() {
    const session = await getServerSession(authOptions)
  return (
    <div className='isolate h-full'>
        <PricingCards redirect={false}/>
        
    </div>
  )
}

export default Register