'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
// import { section } from 'framer-motion/m'
// import { ArrowDown, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
                    <h3 className="text-4xl font-bold">About Me</h3>
                    <p className="text-gray-600 text-center mx-auto mt-2 px-10 max-w-2xl">Passionate about creating meaningful digital experiences that put users first.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className='text-center relative'>
                        <Heart className="absolute -bottom-5 -right-5 p-3 bg-white rounded-full shadow-lg animate-pulse" size={64} />
                        <Image src="/profile.jpg" alt="Profile" width={500} height={400} className="object-contain rounded-2xl w-full shadow-lg" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Who I Am</h4>
                        <p className="text-gray-600 mb-4">
                            I'm a passionate product designer with 1 year of experience in UI/UX design, focused on creating user
                            centered digital experiences. I specialize in intuitive design solutions that bridge the gap between 
                            user needs and business goals.
                        </p>

                        <p className="text-gray-600 mb-3">
                            My approach combines research-driven insights with 
                            creative problem-solving to deliver designs that are 
                            not only beautiful but also functional and accessible.
                        </p>

                        <h4 className="font-semibold mb-3">Design Principles</h4>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {['User-Centered','Accessibility','Innovation','Collaboration','Research-Driven'].map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-full bg-gray-100 text-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )}