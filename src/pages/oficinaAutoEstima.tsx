import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


import NavBar from '../components/Navbar';




const OficinaAutoEstima = () => {
  return (
    <>
    {/* <NavBar /> */}
    <div className=' bg-pink-300 justify-center align-middle'  >
      <div className='fixed left-0 m-2 text-base font-bold text-pink-800 horver:text-underline hover:text-pink-400'>
        <a href="/">Página Inicial</a>
      </div>
      <div className=' w-[80%] m-auto text-center' >
      {/* <img className="w-36 h-36  rounded-full shadow-md shadow-slate-700 m-auto" src="/insta.jpeg" alt="Rounded avatar" /> */}
      
        <div  className='pt-3 text-3xl font-bold text-pink-800 pb-2 '>
          Construindo a Auto Estima do seu filho
        </div>
        <div className='pt-3 text-base font-bold text-pink-800 pb-1 mb-3 m-auto' >
          Marília Pereira | Paloma Freitas | Amanda Araújo
        </div>
        
        
          
            <iframe className='m-auto rounded-lg shadow-2xl shadow-slate-400'  scrolling='yes' src='https://docs.google.com/forms/d/e/1FAIpQLSf8EyBflCbn3NS_dZDmWuH110eRTUEA_rStlLbys8Ye6kSiww/viewform' width='760' height='2345' frameBorder='0'  >Loading…</iframe>
          
        
      </div>
    </div>
    </>
  );
};

export default OficinaAutoEstima;