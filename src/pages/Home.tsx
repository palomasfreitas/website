import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import LogoCard from '../components/LogoCard'

function Home() {
    const [count, setCount] = useState(0)
    const tailwindSuite = "<div className='grid grid-rows-2 grid-cols-1'><div><p className='font-sm text-gray-100 left-0'>headlessUI</p><p className='font-sm text-gray-100 left-0'>heroicons</p></div><div>tailwind css</div>";
  return (
    <div>   
      <div>
        <div className=' w-[50%] m-auto grid grid-rows-2 grid-cols-3'>
          {/* rgba(97, 218, 251, 0.67) */}
          <LogoCard alt="React logo" logo="/react.svg"  name="React" shadow="rgba(0,216,255,1)" href="https://vitejs.dev" />
          <LogoCard alt="Typescript logo" logo="/ts.svg"  name="Typescript" shadow="rgba(0,119,216,1)" href="https://vitejs.dev" />
          <LogoCard alt="Tailwind logo" logo="/tailwindcss.svg"  name="tailwind css" shadow="rgba(0,216,255,1)" href="https://tailwindcss.com/" />
          {/* <LogoCard alt="HeadlessUI logo" logo="/headlessui.svg"  name="headlessui" shadow="rgba(100,108,255,0.67)" href="https://vitejs.dev" /> */}
          <LogoCard alt="Vite logo" logo="/vite.svg"  name="Vite" shadow="rgba(100,108,255,0.67)" href="https://vitejs.dev" />
          <LogoCard alt="GraphQL logo" logo="/graphql.svg"  name="Graph QL" shadow="rgba(255,39,118,1)" href="https://graphql.org/" />
          <LogoCard alt="Apollo logo" logo="/apollostack.svg"  name="Apollo" shadow="rgba(100,108,255,0.67)" href="https://www.apollographql.com/" />
        </div>

    </div>
    </div>
  )
}

export default Home