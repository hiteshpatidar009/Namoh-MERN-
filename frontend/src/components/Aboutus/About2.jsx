import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import img1 from '../../../public/image/img1red.png'

function About2() {
  const text = "At NAMOH Organic Spices, we bring authentic, pure, and natural flavors to your kitchen. Our premium quality spices are 100% natural, free from added colors, and rich in India’s heritage. We support local farmers and sustainable practices, ensuring taste, aroma, and your health are always our priority.";
  const speed = 100;

  const [displaytext, setDisplaytext] = useState('');

  useEffect(() => {
    let index = 0;
  
    const typeText = () => {
      if (index < text.length) {
        setDisplaytext(text.slice(0, index + 1));
        index++;
        setTimeout(typeText, speed);
      }
    };
  
    typeText();
  
    return () => {
      
    };
  }, []);
  

  return (
    <>
      

      <div className="max-w-screen-2xl container mx-auto md:px-8 px-4 mt-0 flex flex-col md:flex-row my-20">

        <motion.div
          className="order-1 w-full md:w-1/2 mt-32 md:mt-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <center className='m-15'>
            <p className="text-3xl font-semibold">{displaytext}</p>
          </center>

        
        </motion.div>

        <motion.div
          
           initial ={{opacity:0,y:-5}}
           animate={{opacity:1,y:35,scale:[null,1.5,0.5,1],backgroundColor:[null,"#42f54b","#e86c07","#1f1f94"],borderRadius:[null,'100%',"10%","30%"]}}
           transition={{duration:2}}
        
          className='mt-32'
        >
          <center className='mr-20 ml-12 '>
          <img className=" w-full h-[600px] rounded-xl" src={img1} />
        </center>

        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        
      </motion.div>


    </>
  );
}

export default About2;
