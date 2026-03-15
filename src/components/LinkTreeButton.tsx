import React from 'react'

function LinkTreeButton({ link, texto }: { link: string, texto: string | React.ReactNode }) {
  return (
    <div className='w-full max-w-[450px] mx-auto mb-4'>
      <a 
        href={link} 
        className='group block'
        target={link.startsWith('http') ? '_blank' : '_self'}
        rel='noopener noreferrer'
      >
        <div className='glass-card py-4 px-6 rounded-2xl text-center group-hover:scale-[1.02] group-hover:bg-white/80 group-hover:border-sage-medium/30 group-active:scale-[0.98] transition-all duration-300'>
          <span className='text-[15px] font-medium text-sage-dark group-hover:text-sage-dark flex items-center justify-center gap-2'>
            {typeof texto === 'string' && texto.includes('<FaWhatsapp') ? (
              // This is a hacky fix for the existing string-based icon injection
              // Ideally this should be passed as a component, but keeping compatibility for now
              texto.replace('<FaWhatsapp /> ', '')
            ) : texto}
          </span>
        </div>
      </a>
    </div>
  )
}

export default LinkTreeButton