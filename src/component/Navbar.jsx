import React from 'react'
import lws from '../assets/lws.svg'

export default function Navbar() {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <img
                        className="h-10"
                        src={lws}
                        alt="Learn with Self"
                    />
                </a>
            </div>
        </nav>
    )
}
