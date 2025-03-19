import React from 'react'
import Home from './components/home/Home'
import { Navigate, Route , Routes } from "react-router-dom"
import Productes from './components/Products/Productes';
import Signup from './components/Signup';
import Contactus from './components/Products/Contact/Contactus';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/context/AuthProvider';
import Service from './components/UserPage/Service';
import User from './components/UserPage/User';
import About from './components/Aboutus/About';
function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser);

 

  return (
    <>
       <div className="dark:bg-slate-900 dark:text-white"> 
        <Routes>
       
        < Route path ="/" element ={<Home/>}/>;
        <Route path ="/product" element={<Productes/>} /> 
        <Route path ="/signup" element={<Signup/>} /> 
        <Route path ="/contact_us" element={authUser?<Contactus/>:<Navigate to ="/signup"/>}/>
        <Route path ="/service" element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path ="/user" element={<User/>}/>
        </Routes>
        <Toaster />
     </div>
    </>
  );
}

export default App;
