import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import VantaHalo from '../components/VantaHalo'
import Footer from '../components/Footer'

import { CirclesWithBar } from  'react-loader-spinner'
export default function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Here you can mimic an API call or any async operation.
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }, []);
    

  return (
    <div className='bg-[#180118]'>
      <Nav />      
      <div className='flex justify-center align-middle'> 
            <div className="w-[1500px] h-px bg-gray-500"></div>
        </div>

      {/* HERO SECTION */}

      <div className="h-[950px]">

      <VantaHalo>
        {/* Add stuff in here */}
      </VantaHalo>

      </div>



      {/* INFO SECTION */}

        {/* FEATURES SECTION */}







      {/* FOOTER */}

        <div className='flex justify-center align-middle'> 
            <div className="w-[1500px] h-px bg-gray-500"></div>
        </div>
        
        <Footer />
      

    </div>  
  )
}
