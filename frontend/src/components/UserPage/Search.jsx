import React, { useState } from 'react'
import axios from 'axios';

function Search() {
     
    const[sname ,setSname]=useState();
    const[title  ,setTitle]=useState();
    const[packet  ,setPacket]=useState();
    const[category,setCategory]=useState();
    const[price,setPrice]=useState();
    const[image,setImage]=useState();

    const handleSnametext=(evt)=>{
        setSname(evt.target.value)
    }

    const handleSearchButton = ()=>{
     
        axios.get("http://localhost:40001/spices/search/"+sname)
        .then((res)=>{
            setSname(res.data.sname);
            setTitle(res.data.title);
            setPacket(res.data.packet);

            setCategory(res.data.category);
            setPrice(res.data.price);
            setImage(res.data.image);
        }).catch((err)=>{
            alert(err)
        })
    }
    
    
  return (
    <div>
        <center>
        <h4 style={{backgroundColor:"yellow" ,color:"black"}}>Search Spices Details BY Name</h4>
          <table className='border-separate border border-yellow-500 border-4 mt-3 mb-3'>
            <tr>
                <td className='border border-gray-300' >Enter your Name</td>
                <td className='border border-gray-300'>
                    <input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' onChange={handleSnametext} />
                </td>
            </tr>

            <tr>
                <td className='border border-gray-300'>title </td>
                <td className='border border-gray-300'>
                    <input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' readOnly value={title} />
                </td>
            </tr>

            <tr>
                <td className='border border-gray-300'>Size of Packet </td>
                <td className='border border-gray-300'>
                    <input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' readOnly value={packet} />
                </td>
            </tr>

            <tr>
                <td className='border border-gray-300'>category</td>
                <td className='border border-gray-300'>
                    <input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' readOnly value={category} />
                </td>
            </tr>

            <tr>
                <td className='border border-gray-300'>Price</td>
                <td className='border border-gray-300'>
                    <input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text'readOnly  value={price} />
                </td>
            </tr>

            <tr>
                <td >Image</td>
                <td >
                    <img className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" style={{height:"100px",width:"100px"}} src={image} readOnly ></img>
                </td>
            </tr>

            <tr>
                <td ></td>
                <td >
                    <button  type='submit' onClick={handleSearchButton} >Search</button>
                </td>
            </tr>
          </table>
        </center>
    </div>
  )
}

export default Search