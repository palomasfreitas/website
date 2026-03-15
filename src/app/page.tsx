import { FaMediumM, FaInstagram, FaWhatsapp, FaBook, FaRegFolderOpen } from 'react-icons/fa';
import './globals.css'
import LinkTreeButton from '../components/LinkTreeButton';
import LinkTreeDropdown from '../components/LinkTreeDropdown';

export default function Home() {
  return (
    <main className='animate-fade-in flex flex-col items-center justify-center min-h-screen px-4 py-12 max-w-[600px] mx-auto'>

      {/* Profile Section */}
      <section className='text-center mb-12'>
        <div className='relative inline-block mb-6'>
          <img
            className="w-32 h-32 rounded-full profile-shadow object-cover border-4 border-white"
            src="/insta.jpeg"
            alt="Paloma Freitas"
          />
        </div>

        <h1 className='text-4xl text-sage-dark mb-1'>
          Paloma Freitas
        </h1>
        <p className='text-sage-medium font-medium tracking-wide uppercase text-xs'>
          Psicóloga Clínica • CRP 02/17441
        </p>
      </section>

      {/* Primary Actions */}
      <section className='w-full space-y-1 mb-12'>
        <LinkTreeButton
          link="https://api.whatsapp.com/send?phone=5581982279499"
          texto={<><FaWhatsapp className="text-lg" /> Agendar Consulta</>}
        />
        <LinkTreeButton
          link="http://loja.palomafreitas.com"
          texto={<><FaBook className="text-lg" /> Livros</>}
        />
        <LinkTreeDropdown 
          titulo="Materiais"
          icone={<FaRegFolderOpen className="text-lg" />}
          items={[
            { link: "https://drive.google.com/file/d/1eD84wEuGO3FzD6dG5PF9E5E-4KCBYmPg/view?usp=sharing", texto: "Roda da Vida" },
            { link: "https://docs.google.com/forms/d/e/1FAIpQLSet4gtutQmYiO1RUGY0ZmpxU5ckjmNdT8IPwFOP-Xe0IyuBAA/viewform", texto: "Grupo - Habilidade pra Vida" },
            { link: "/oficina", texto: "Oficina - Autoestima Infantil" }
          ]}
        />
        <LinkTreeButton
          link="http://www.instagram.com/institutoblu/"
          texto={<><img src="/blublack.png" className="w-7 h-7 object-contain" alt="" /> Instituto Blu</>}
        />
      </section>


      {/* Social Media */}
      <section className='text-center w-full'>
        <h2 className='text-sm font-medium text-sage-medium uppercase tracking-[0.2em] mb-6'>
          Conecte-se
        </h2>
        <div className='flex justify-center gap-6'>
          <a
            href="https://instagram.com/palomasfreitas"
            target="_blank"
            rel="noopener noreferrer"
            className='glass-card w-12 h-12 flex items-center justify-center rounded-full text-sage-dark hover:bg-sage-dark hover:text-white transform hover:-translate-y-1'
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://palomasfreitas.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className='glass-card w-12 h-12 flex items-center justify-center rounded-full text-sage-dark hover:bg-sage-dark hover:text-white transform hover:-translate-y-1'
            aria-label="Medium"
          >
            <FaMediumM size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className='mt-20 text-[10px] text-sage-medium/60 uppercase tracking-widest'>
        © {new Date().getFullYear()} Paloma Freitas
      </footer>
    </main>
  )
}
