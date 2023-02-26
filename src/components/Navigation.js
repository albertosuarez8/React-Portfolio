import React from 'react'
import { Dropdown } from 'flowbite-react';

function Navigation() {
    return (
        <header className="w-full justify-center items-center fixed z-10">
            <nav className="flex w-full sm:flex backdrop-filter backdrop-blur-lg bg-opacity-10 z-10 bg-white justify-center">
                <ul className="hidden sm:flex sm:p-6">
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#">
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#">
                            <span>About</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#">
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className="sm:px-10 text-zinc-300">
                        <a href="#">
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
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;