import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import VantaHalo from '../components/VantaHalo'
import Footer from '../components/Footer'
import MainForm from '../components/mainForm'
import Table from '../components/Table'

import { CirclesWithBar } from  'react-loader-spinner'


export default function MyLocks() {

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

      <div className="h-[650px]">


        <div className=" max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12">
            <Table />
        </div>    
        
        
        
         

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
