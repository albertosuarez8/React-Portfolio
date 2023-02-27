import React from 'react'
import image from '../assets/glub.png'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'


function Footer() {
    return ( 
        <div className='w-full flex justify-end fixed bottom-0 left-0'>
            <div className='flex items-end mx-2 my-2'>
                <a href="https://www.linkedin.com/in/albertojsuarez/" className='w-[50px] h-[50px] mx-5 hover:opacity-50'>
                    <SiLinkedin className='w-[50px] h-[50px] text-zinc-300'/>
                </a>
                <a href="https://github.com/albertosuarez8" className='w-[50px] h-[50px] hover:opacity-50'>
                    <BsGithub className='w-[50px] h-[50px] text-zinc-300'/>
                </a>
            </div>
        <footer className="flex justify-end">
            <img className="opacity-50" src={image}
                alt="" width="100" height="0"/>
        </footer>
        </div>
    );
}

export default Footer;