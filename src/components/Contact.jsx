import React from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div
            id="contact-us"
            className='py-20 bg-dark-200' >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Get In
                    <span className='text-purple'> Touch!</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                    {/* Contact form */}

                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input placeholder='Enter your name' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Email</label>
                                <input placeholder='Enter your email' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='email' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Enter Message Here</label>
                                <textarea placeholder='Message...' className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' />
                            </div>
                            <button type='submit' className='w-40 px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-200 cursor-pointer'>Send</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Indira nagar, Lucknow, India</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <a href="mailto:apyadav7379@gmail.com" className='block'>
                                <p className='text-gray-400 hover:text-purple-400 transition-colors cursor-pointer'>apyadav7379@gmail.com</p></a>
                            </div>
                        </div>
                        
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <a href="tel:+916394227335" className="">
                                <p className='text-gray-400 cursor-pointer hover:text-purple-400'>+91 6394227335</p></a>
                            </div>
                        </div>

                        {/*icon*/}

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me!</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/atul-yadav-cloud" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-gray-900 hover:text-white transition duration-200'>
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/atul-yadav-cloud" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue-700 hover:text-white transition duration-200'>
                                    <FaLinkedin />
                                </a>
                                <a href="https://x.com/theatul09" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-200'>
                                    <FaTwitter />
                                </a>
                                <a href="https://instagram.com/great_atul" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-200'>
                                    <FaDribbble />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </motion.div >
    )
}

export default Contact
