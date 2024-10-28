import React from 'react'
import { Dropdown } from 'flowbite-react';
import {GiHamburgerMenu} from 'react-icons/gi'

function Navigation(props) {

    function handleClick(title) {
        props.handleTitle(title);
    }

    const linkHandler = () => {
        window.open("https://docs.google.com/document/d/1wKBuiCi2Psyp3vZUah-DeqPQXdEcZAcS7nhXUOQPnzM/edit?usp=sharing", "_blank");
    }

    return (
        <header className="w-full justify-center items-center fixed z-10">
            <nav className="flex w-full sm:flex backdrop-filter backdrop-blur-lg bg-opacity-10 z-10 bg-white justify-center">
                <ul className="hidden sm:flex sm:p-6">
                    <li className="sm:px-10 text-zinc-300">
                        <button className='hover:opacity-50' onClick={() => handleClick("About Me")}>
                            <span>About Me</span>
                        </button>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <button className='hover:opacity-50' onClick={() => handleClick("My Projects")}>
                            <span>Projects</span>
                        </button>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a className='hover:opacity-50' href="https://docs.google.com/document/d/1wKBuiCi2Psyp3vZUah-DeqPQXdEcZAcS7nhXUOQPnzM/edit?usp=sharing" target="_blank" rel='noreferrer'>
                            <span>Resume</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <button className='hover:opacity-50' onClick={() => handleClick("Contact Me")}>
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
                        label={<GiHamburgerMenu/>}
                        placement="bottom"
                        dismissOnClick={false}
                        >
                        <Dropdown.Item onClick={() => handleClick("About Me")}>
                            About Me
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClick("My Projects")}>
                            Projects
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => linkHandler()}>
                            Resume
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleClick("Contact Me")}>
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