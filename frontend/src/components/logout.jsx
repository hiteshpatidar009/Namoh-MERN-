import React from 'react'
import { useAuth } from './context/AuthProvider'
import toast from 'react-hot-toast'

function logout() {
    const [authUser,setAuthUser]=useAuth ()
    const handleLogout=() =>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Logout successfully");
            
           
            setTimeout(() =>{
                window.location.reload();
  
            },3000); 
           
        } catch (error) {
            toast.error("Error"+error)
            setTimeout(() => {
                
            }, 2000);
        }
    }
  return (
    <div>
      <button className='px3 py2 bg-red-500 text-white rounded-md cursor-pointer'on onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default logout
