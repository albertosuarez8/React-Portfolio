import React from 'react'
import image from '../assets/glub.png'


function Footer() {
    return (
        <div className='w-full fixed bottom-0 left-0'>
        <footer className="flex justify-end">
            <img className="lg:opacity-50" src={image}
                alt="" width="200" height="0"/>
        </footer>
        </div>
    );
}

export default Footer;