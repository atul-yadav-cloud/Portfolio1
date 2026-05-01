import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      id='about'
      className='py-20 bg-dark-200'>

      <div className='container text-center mx-auto px-6'>

        {/* Heading */}

        <h2 className='text-3xl font-bold text-center mb-4'>About
          <span className='text-purple'> Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about me and my passionate work.</p>

        {/*images my journey */}

        <div className='flex flex-col md:flex-row items-center gap-21'>

          {/* Image */}

          <div className='md:w-1/2 rounded-2xl overflow:hidden'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='w-full h-full object-cover rounded-4xl'
              src={assets.profileimg} alt="" />
          </div>

          {/*Text content */}

          <motion.div
            className='md:w-1/2'>
            <div className='rounded-2xl p-6 -mt-16 text-gray-300 text-left'>
              <h3 className='text-2xl font-semibold mb-2 cursor-pointer'>My Journey</h3>
              <p className='mb-2'>
                I am a MERN Stack Developer and AWS Cloud Engineer with 3+ years
                of experience building scalable, high-performance web applications.
                I specialize in developing end-to-end solutions using MongoDB, Express.js,
                React.js, and Node.js, along with deploying and managing applications on
                AWS cloud infrastructure.</p>
                <p className='mb-2'>From crafting responsive and intuitive user interfaces to designing robust
                backend systems and RESTful APIs, I work across the full development lifecycle.
                I have hands-on experience with authentication and authorization, performance
                optimization, and implementing secure, production-ready architectures.
                I also leverage AWS services and CI/CD pipelines to ensure applications are reliable,
                scalable, and efficiently deployed.
              </p>
              <p>Explore my projects to see how I leverage modern JavaScript frameworks to solve complex problems and drive digital success.</p>
              <br></br>

              {/*Cards */}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                  aboutInfo.map((data, index) => (
                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:scale-102  hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] cursor-pointer'>
                      <div className='text-purple text-2xl mb-4 '>
                        <data.icon />
                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                        <p className='text-gray-400 text-sm'>{data.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
