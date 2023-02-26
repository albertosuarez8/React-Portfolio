import React from 'react'
import { Dropdown } from 'flowbite-react';

function Navigation(props) {

    function handleClick(title) {
        props.handleTitle(title); 
    }

    return (
        <header className="w-full justify-center items-center fixed z-10">
            <nav className="flex w-full sm:flex backdrop-filter backdrop-blur-lg bg-opacity-10 z-10 bg-white justify-center">
                <ul className="hidden sm:flex sm:p-6">
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#" onClick={() => handleClick("About Me")}>
                            <span>About Me</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#" onClick={() => handleClick("My Projects")}>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#">
                            <span>Resume</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#" onClick={() => handleClick("Contact Me")}>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
                {/* <!-- Dropdown menu --> */}
                <div className='flex sm:hidden'>
                    <Dropdown
                        label="Dropdown button"
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
            </nav>
        </header>
    );
}

export default Navigation;