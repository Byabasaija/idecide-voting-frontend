import React, { useEffect, useState} from 'react'
import { useLogin } from './hooks/useLogin'


 
function Login() {
   const {loggedIn, handleLogin} = useLogin()
  return (
    <div className='flex justify-center'>
     <div className='text-center mt-10 p-4'>
        {loggedIn ? 
        null:
       
         <>
         <h1 className="text-5xl text-black-600 font-bold">
         {' '}
         Welcome to <span className="text-green-500">IDecide</span>
       </h1>
       <p className="pt-5 text-gray-600 text-xl font-medium">
         {' '}
        Where your decision is respected. Login to decide on your future now!
       </p>
         <button  type="button"
         className="inline-block px-6 py-2 border-2 text-white font-medium bg-green-500
         text-xs leading-tight uppercase rounded hover:bg-black focus:outline-none
         focus:ring-0 transition duration-150 ease-in-out mr-4 mt-5" onClick={handleLogin}>Login with Ndejje University</button></>
    }
      </div> 
    </div>
     
    
  )
}

export default Login