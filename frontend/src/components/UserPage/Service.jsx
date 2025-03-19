import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

function Service() {

   const [uid, setUid] = useState('');
   const [pass, setPass] = useState('');
   const navigate = useNavigate();

   const handleUserid = (evt) => {
      setUid(evt.target.value)
   }
   const handleUserPassword = (evt) => {
      setPass(evt.target.value)
   }

   const handleSubmitButton = () => {
      if (uid === "gilki" && pass === "hitesh123") {
         navigate("/user");
      } else {
         alert("Your ID and password do not match");
      }
   }

   return (
      <>
         <Navbar />

         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-sm w-full">
               <h3 className="text-2xl font-bold text-center mb-6 text-gray-700 dark:text-white">
                  Team NamohSpices Login
               </h3>

               <div className="space-y-4">
                  {/* User ID Input */}
                  <div>
                     <label className="block text-gray-600 dark:text-gray-300 font-medium">User ID</label>
                     <input
                        type="text"
                        onChange={handleUserid}
                        placeholder="Enter User ID"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                     />
                  </div>

                  {/* Password Input */}
                  <div>
                     <label className="block text-gray-600 dark:text-gray-300 font-medium">Password</label>
                     <input
                        type="password"
                        onChange={handleUserPassword}
                        placeholder="Enter Your Password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                     />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                     <button
                        type="submit"
                        onClick={handleSubmitButton}
                        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-200"
                     >
                        Submit
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </>
   )
}

export default Service;
