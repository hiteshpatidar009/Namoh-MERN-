import React, { useState } from 'react'
import axiosInstance from '../../api/axiosInstance.js';


function MainTitle() {
  
   const [title ,setTitle]=useState();
   const [line1 ,setLine1]=useState();
   const [line2 ,setLine2]=useState();

   const handleTitletext = (evt)=>{
       setTitle(evt.target.value)
   }
   const handleLine1text = (evt)=>{
    setLine1(evt.target.value)
   }
   const handleLine2text = (evt)=>{
    setLine2(evt.target.value)
     }

   const handleSubmitButton =()=>{

    const obj={
        title:title,
        line1:line1,
        line2:line2
    }
 
   axiosInstance.post("/title/titleSave/",obj)
        .then((res)=>{
            alert(res.data)
        }).catch((err)=>{
            alert(err)
        })
 }
     
 
    
   const handleDefaultButton =()=>{

    const obj1={
        title:"100% Natural & Pure Spices – No Chemicals, Just Flavor",
        line1:"Say goodbye to artificial additives and fillers",
        line2:"Enjoy real, natural spices for healthier, tastier cooking"
    }
    axiosInstance.post("/title/titleSave/",obj1)
        .then((res)=>{
            alert(res.data)
        }).catch((err)=>{s
            alert(err)
        })

   }  


  return (
    <div>
        <center>
            <h3 style={{backgroundColor:"violet",color:"black"}} >Change the title</h3>
            <table>
                <tr>
                    <td>Enter your Titel</td>
                    <td><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text' onChange={handleTitletext} /></td>
                </tr>
                <tr>
                   <td>Enter your Line 1</td>
                    <td><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text 'onChange={handleLine1text}/></td>
                </tr>

                <tr>
                   <td>Enter your Line 2</td>
                    <td><input className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" type='text 'onChange={handleLine2text}/></td>
                </tr>

                <tr>
                    <td></td>
                    <td><button type='submit' onClick={handleSubmitButton} >Submit</button></td>
                    <td><button type='submit' onClick={handleDefaultButton} >Default Titles</button></td>
                </tr>
            </table>
        </center>
    </div>
  )
}

export default MainTitle
