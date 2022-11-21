import React from 'react'

export default function copyright() {
  return (
    <div className='h-screen bg-gray-50 pt-20 space-y-8'>
        <div className='text-base text-left px-5  bg-white p-1  '> How can we help?  </div>
        <div className='h-full'>
            <h1 className='text-[1rem] bg-white p-2 flex flex-start font-medium text-gray-700 border-b '>Help Center</h1>
            <div className='bg-white text-gray-500 font-medium h-full flex flex-col items-start justify-start p-3'>
                <h1 className='text-lg font-bold text-gray-900 pb-2'>Appeal to Copyright Infringement</h1>
                <p className='text-[0.9rem]'>Your appeal has been sent </p>
                <p className='text-left text-[0.9rem]'>If you entered the information correctly we will recieve your account and contact you via e-mail </p>
            </div>
        </div>
    </div>
  )
}
