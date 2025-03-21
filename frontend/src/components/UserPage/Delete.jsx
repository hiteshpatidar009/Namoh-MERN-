import axiosInstance from '../../api/axiosInstance.js';

import React, { useState } from 'react'

function Delete() {

    const[sname , setSname]=useState();
    
    const handleSpicesName =(evt)=>{
        setSname(evt.target.value)
    }

    const handleSubmitButton=()=>{
     
        axiosInstance.delete("/spices/delete/" + sname)
        .then((res)=>{
            alert(res.data)
        }).catch((err)=>{
            alert(err)
        })
    }

  return (
    <div>
        <center>
            <h3 style={{backgroundColor:"red",color:"black"}}>Delete the spices </h3>
            <table className='border-separate border border-red-600  border-4 mt-3 mb-3' >
            <tr>
                <td className='border border-gray-300'>Enter the spices name </td>
                <td className='border border-gray-300'>
                    <input type='text' className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" onChange={handleSpicesName} />
                </td>
            </tr> 
            <tr>
                <td></td>
                <td>
                    <button type='submit' onClick={handleSubmitButton} >
                        submit
                    </button>
                </td>
            </tr>
            </table>
        </center>
    </div>
  )
}

export default Delete