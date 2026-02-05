'use client'

import { motion } from 'framer-motion'
// import { section } from 'framer-motion/m'
import { Github, Bookmark, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function FeaturedWork() {
    const projects = [
        {
            title: `Splash and Get Started Screens, Login Screens, Create Account Screens, Guest Agreement & Identity 
                    Verification Screens and Forget Password & OTP Verification Screens`,

            description: `Comprehensive car rental mobile 
                    application with intuitive booking flow 
                    and modern interface design`,
            url: '/mockups.jpg',

            tags: ['Mobile Design', 'UI Design', 'Figma'], 
        },
        {
            title: `Car Browse Screens`,

            description: `Advanced car rental interface featuring 
                    detailed vehicle information and 
                    seamless user experience.`,
            url: '/mockups 1.jpg',
                    
            tags: ['Mobile Design', 'UI Design', 'Figma'], 
        },
        {
            title: `My Offer Screens, Messages 
                    Screens, Updates Screens and 
                    Account Settings Screens`,

            description: `Complete car rental booking system with 
                    payment integration and user-friendly 
                    navigation`,
            url: '/MacBook Pro 16-inch Space Black Front.jpg',
                    
            tags: ['Mobile Design', 'UI Design', 'Figma'], 
        },
        {
            title: `A Simple Messaging App`,

            description: `Modern messaging application with clean 
                    design, real-time chat features and 
                    intuitive user interface.`,
            url: '/mockups.jpg',
                    
            tags: ['Mobile Design', 'UI Design', 'Figma'], 
        },
        {
            title: `Light Mode & Dark Mode Screens`,

            description: `Elegant dual-theme interface design 
                    showcasing seamless transition between 
                    light and dark modes.`,
            url: '/mockups.jpg',
            tags: ['Mobile Design', 'UI Design', 'Figma'], 
        },
        {
            title: `Health Home Page and Read More Screens`,

            description: `Healthcare application design with 
                    clean home page layout and detailed 
                    information architecture.`,
            url: '/mockups.jpg',
                    
            tags: ['Mobile Design', 'UI Design', 'Figma'], 
        },
    ]
    
    return (
        <section id="work" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-4xl  font-bold">Featured Work</h3>
                    <p className="text-gray-600 mt-2 text-center mx-auto px-10 max-w-2xl">
                        A collection of UI/UX design projects showcasing my 
                        passion for creating exceptional digital experiences.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map(p => (
                        <motion.div
                        key={p.title}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-sm rounded-2xl overflow-hidden h-screen border border-[#e5e7eb] bg-white shadow-sm hover:shadow-md transition">
                    
                        {/* Image Section */}
                        <div className="bg-blue-500 p-4 h-[40%] w-">
                            <span className="absolute top-3 left-3 text-xs font-medium bg-blue-400 text-white px-3 py-1 rounded-full">
                                Featured
                            </span>
                            <div className="flex justify-center overflow-hidden h-full">
                                <Image
                                    src={p.url}
                                    alt="Design Preview"
                                    width={380}
                                    height={460}
                                    className="object-cover"
                                    />
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5 space-y-4 relative h-[60%] flex flex-col">
                            <h3 className="text-lg font-extrabold leading-snug">
                                {p.title}
                            </h3>

                            <p className="text-[16px] text-gray-600">
                                {p.description}
                            </p>
                            
                            <div className='mb-2 mt-auto'>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1 rounded-full border bg-gray-50">
                                                {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Actions */}
                                <div className="flex items-center gap-3 pt-2 ">
                                    <button className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
                                        View Design
                                        <ArrowUpRight size={16} />
                                    </button>
                                    <button className="p-2.5 cursor-pointer border border-[#e5e7eb] rounded-xl hover:bg-gray-100 transition">
                                        <Github size={18} />
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </motion.div>
                    ))}
                    
                </div>

                <div className='text-center p-10'>
                    <button className="px-5 py-3 cursor-pointer hover:scale-110 border rounded text-sm font-bold border-[#e5e7eb]">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    )}