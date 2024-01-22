import Image from 'next/image'
import { Inter } from '@next/font/google'
import {  FaLinkedin, FaMediumM, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import './global.css'
import { MdSettings } from 'react-icons/md';



import LinkTreeButton from '../components/LinkTreeButton';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=' grid grid-cols-1 min-h-screen m-auto justify-center bg-green-200' >
      
      <div className='perfil m-auto text-center'>
        <img className="w-36 h-36 m-auto rounded-full shadow-md shadow-slate-700" src="/insta.jpeg" alt="Rounded avatar" />

        <div className='pt-3 text-base font-normal text-green-600 pb-1' >
              Paloma Freitas
        </div>
        <div  className='pt-3 text-base font-normal text-green-600 pb-2'>
              Psicóloga Clínica - CRP 02/17441
        </div>
      </div>
      <LinkTreeButton link="https://drive.google.com/file/d/1eD84wEuGO3FzD6dG5PF9E5E-4KCBYmPg/view?usp=sharing" texto="Roda da Vida" />
      <LinkTreeButton link="https://docs.google.com/forms/d/e/1FAIpQLSet4gtutQmYiO1RUGY0ZmpxU5ckjmNdT8IPwFOP-Xe0IyuBAA/viewform" texto="Grupo - Habilidade pra Vida" />
      <LinkTreeButton link="/oficina" texto="Oficina - Construindo a autoestima do seu filho" />
      <LinkTreeButton link="https://api.whatsapp.com/send?phone=5581996110403" texto="<FaWhatsapp /> Agendamentos" />
      <LinkTreeButton link="http://www.institutodrtiagoqueiroz.com.br/" texto="Instituto Dr. Tiago Queiroz" />

     
      
      
      





      <div className='text-base font-normal pt-6 text-white pb-2'>
            Redes Sociais
      </div>
      <div className='grid grid-rows-1'>
        <a href="https//instagram.com/palomasfreitas">
          <div className='hover:bg-pink-500 hover:text-white bg-white text-pink-400'>
          <FaInstagram />
          </div>
        </a>
        {/* <IconButton _hover={{ bg: 'blue.400', color: '#FFFFFF'}}  bgColor={'white'} color='blue.400' icon={<FaLinkedin />} aria-label={''} /> */}
        <a href="https://palomasfreitas.medium.com/">
          <div className='hover:bg-black hover:text-white bg-white text-black'>
          <FaMediumM />
          </div>
        </a>

      </div>
      
      

    </div>
    </>
  )
}
