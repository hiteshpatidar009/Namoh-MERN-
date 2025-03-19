import React, { useState } from 'react'

import axios from 'axios'

function Additem() {
    const [sname , setSname]=useState()
    const [title , setTitle]=useState()
    const [packet,setPacket]=useState()
    const [price , setPrice]=useState()
    const [category , setCategory]=useState()
    const [image , setImage]=useState()
  
    const handleSnametext=(evt)=>{
      setSname(evt.target.value)
    }
    const handletitel=(evt)=>{
      setTitle(evt.target.value)
    }
    const handlepacket=(evt)=>{
      setPacket(evt.target.value)
    }
    
    
    const handlePrice=(evt)=>{
      setPrice(evt.target.value)
    }
    
    const handleCategory=(evt)=>{
      setCategory(evt.target.value)
    }
    
    const handleImage=(evt)=>{
      setImage(evt.target.value)
    }
    
    const handleSubmitButton=()=>{
      const obj={
        name:sname,
        title:title,
        packet:packet,
        price:price,
        category:category,
        image:image
      }
      axios.post("http://localhost:40001/spices/save/", obj)
  
      .then((res)=>{
        alert(res.data)
      }).catch((err)=>{
        alert(err)
      })
  
    }
  
    return (<>
      
      <div className='mt-28'>
        <center>
          <h4 style={{backgroundColor:"green" ,color:"black"}} >Add Product on the Page</h4>
          <table className='border-separate border border-green-500 border-4 mt-3 mb-3'  >
            <tr>
              <td className='border border-gray-300' >Enter your Product name </td>
              <td className='border border-gray-300'><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' onChange={handleSnametext} /></td>
            </tr>
            <tr> 
              <td className='border border-gray-300'>Enter your title </td>
              <td className='border border-gray-300'><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' onChange={handletitel} /></td>
            </tr>
            <tr> 
              <td className='border border-gray-300'>Size of a packet </td>
              <td className='border border-gray-300'><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' onChange={handlepacket} /></td>
            </tr>
            <tr>
              <td className='border border-gray-300'>Enter your Price </td>
              <td className='border border-gray-300'><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' onChange={handlePrice} /></td>
            </tr>
            <tr>
              <td className='border border-gray-300'>Enter your category </td>
              <td className='border border-gray-300'><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' onChange={handleCategory} /></td>
            </tr>
            <tr>
              <td className='border border-gray-300'>Enter your image url </td>
              <td className='border border-gray-300'><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type="text" placeholder="enter url only" onChange={handleImage} /></td>
            </tr>
            <tr>
              <td> </td>
              <td ><button type='submit' onClick={handleSubmitButton} >Submit</button></td>
            </tr>
  
          </table>
          </center>
          </div>
      
      </>
    )
}

export default Additem