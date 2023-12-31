import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import VantaHalo from '../components/VantaHalo'
import Footer from '../components/Footer'
import MainForm from '../components/mainForm'

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
        {/* <MainForm /> */}

        <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <MainForm />
                {/* <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">One of the World's Best Digital Assets</h1> */}
            </div>                
        </div>

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
