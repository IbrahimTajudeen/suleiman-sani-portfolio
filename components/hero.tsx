'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
// import Image from 'next/image'

export default function Hero() {
    return (
        <section id="home" className="h-screen pt-32 pb-24 bg-gradient-to-b from-white to-blue-50">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center px-6">
                <h2 className="mt-32 text-4xl md:text-6xl font-bold">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Suleiman Sani</span>
                </h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                    I'm a Product Designer passionate about creating user-centered digital experiences,
                    focused on intuitive design solutions
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button className="px-4 py-2 text-2xl rounded-full bg-blue-600 text-white">See My Work</button>
                    <button className="px-4 py-2 text-2xl rounded-full border">Get In Touch</button>
                </div>
                <div className="mt-8 flex justify-center gap-5 text-gray-600">
                    <Twitter size={18} />
                    <Linkedin size={18} />
                    <Instagram size={18} />
                    <Mail size={18} />
                </div>
                <ArrowDown className="mx-auto mt-12 animate-bounce" />
            </motion.div>
        </section>
    )}