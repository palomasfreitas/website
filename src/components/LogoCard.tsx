import React from 'react'
import classNames from 'classnames';

function hexToRgbA(hex:string){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        let c:any= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}

function LogoCard(props:any) {
//const shadowColor = hexToRgbA(props.shadow) 
//const shadow:String = 'hover:drop-shadow-[0_32px_32px_'+ shadowColor +']' 
const shadow = 'hover:drop-shadow-[0_32px_32px_' + props.shadow + ']'
  return (
    <div >
        {/*
        ts className='hover:drop-shadow-[0_32px_32px_rgba(0,119,216,1)]'
        react -className='hover:drop-shadow-[0_32px_32px_rgba(0,216,255,1)]'
        graphql className='hover:drop-shadow-[0_32px_32px_rgba(255,39,118,1)]' 
        vite hover:drop-shadow-[0_32px_32px_rgba(100,108,255,0.67)] */}
        <div className='mt-5 mx-3'>
          <a href={props.href} target="_blank">
            <img src={props.logo} className={'p-5 m-auto w-52 h-52 ' + shadow}/>
          </a>
        </div>
       <div className=' text-center'>
          <p className='pt-1 m-auto text-3xl font-bold text-slate-700'>{props.name}</p>
       </div>
         
    </div>
  )
}

export default LogoCard