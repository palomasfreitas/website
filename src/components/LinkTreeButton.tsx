import React from 'react'

function LinkTreeButton(props:any) {
  const link = props.link
  return (
    <div>
      <a href={link} >
        <div className='py-4 px-2 m-auto rounded-md mt-2 text-center hover:bg-[#F765A3] hover:text-[#F9D1D1] shadow-2xl text-white bg-[#FFA4B6] min-w-[30%] max-w-[50%]'>
          <span className=' text-pink-700  hover:text-pink-100'>{props.texto}</span>
        </div>
      </a>
    </div>
  )
}

export default LinkTreeButton