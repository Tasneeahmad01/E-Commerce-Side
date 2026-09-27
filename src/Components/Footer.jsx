import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 md:px-16 lg:px-24">
            <div className='container max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8'>

                {/* Column 1 */}
                <div>
                    <h3 className="text-xl font-bold mb-3 text-red-200">Killing SHOP</h3>
                    <p className="text-gray-400">
                        Your one-step for all your needs. Shop with us and experience the best online
                        shopping experiences.
                    </p>
                </div>

                {/* Column 2 */}
                <div className='flex flex-col md:items-center'>
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link to='/' className="text-gray-400 hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link to='/shop' className="text-gray-400 hover:text-white">Shop</Link>
                        </li>
                        <li>
                            <Link to='/' className="text-gray-400 hover:text-white">Contact</Link>
                        </li>
                        <li>
                            <Link to='/about' className="text-gray-400 hover:text-white">About</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className="text-lg font-semibold">Follow Us</h4>
                    <div className="flex space-x-4 mt-4 text-2xl">
                        <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-gray-300"><FaGithub /></a>
                    </div>
                    <form className="flex items-center gap-2 mt-4">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="px-4 py-2 w-full rounded-md text-black outline-none border border-gray-600"
                        />
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            <div className=" flex justify-between border-t border-gray-700 text-center py-4 text-gray-400">
                © 2026 e-Shop. All rights reserved.
                <div className='flex space-x-4 mt-4 md:mt-0'>
                    <a href="" className='hover:underline'>Privacy Policy</a>
                    <a href="" className='hover:underline'>Terms & Conditions</a>

                </div>
            </div>
        </footer>
    );
}

export default Footer;