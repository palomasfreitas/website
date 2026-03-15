'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownItem {
  link: string;
  texto: string;
}

interface LinkTreeDropdownProps {
  titulo: string;
  items: DropdownItem[];
  icone?: React.ReactNode;
}

function LinkTreeDropdown({ titulo, items, icone }: LinkTreeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full max-w-[450px] mx-auto mb-4'>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className='w-full glass-card py-4 px-6 rounded-2xl text-center group transition-all duration-300 flex items-center justify-between'
      >
        <span className='invisible w-5 h-5'></span> {/* Left spacer for alignment */}
        <span className='text-[15px] font-medium text-sage-dark flex items-center justify-center gap-2'>
          {icone} {titulo}
        </span>
        <FaChevronDown className={`text-sage-medium transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className='bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-2 space-y-1'>
          {items.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel='noopener noreferrer'
              className='block py-3 px-4 rounded-xl text-sage-dark hover:bg-white/50 transition-colors text-sm text-center'
            >
              {item.texto}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinkTreeDropdown;
