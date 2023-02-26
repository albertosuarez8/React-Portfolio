import React from 'react'
import { Dropdown } from 'flowbite-react';
import {GiHamburgerMenu} from 'react-icons/gi'

function Navigation(props) {

    function handleClick(title) {
        props.handleTitle(title);
    }

    return (
        <header className="w-full justify-center items-center fixed z-10">
            <nav className="flex w-full sm:flex backdrop-filter backdrop-blur-lg bg-opacity-10 z-10 bg-white justify-center">
                <ul className="hidden sm:flex sm:p-6">
                    <li className="sm:px-10 text-zinc-300">
                        <button onClick={() => handleClick("About Me")}>
                            <span>About Me</span>
                        </button>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <button onClick={() => handleClick("My Projects")}>
                            <span>Projects</span>
                        </button>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a href="">
                            <span>Resume</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <button href="" onClick={() => handleClick("Contact Me")}>
                            <span>Contact</span>
                        </button>
                    </li>
                </ul>
                {/* <!-- Dropdown menu --> */}
                <div className='flex sm:hidden justify-around w-full items-center'>
                    <div className='text-[2.5rem] text-zinc-300'>
                        Alberto Suarez
                    </div>
                    <div>
                    <Dropdown
                    className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '
                        label={<GiHamburgerMenu/>}
                        placement="bottom"
                        dismissOnClick={false}
                        >
                        <Dropdown.Item>
                            About Me
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Projects
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Resume
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Contact
                        </Dropdown.Item>
                    </Dropdown>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}

export default Navigation;