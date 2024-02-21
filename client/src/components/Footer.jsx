import React from 'react'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-50 text-black font-semibold text-2xl p-4">
                <div className="container mx-auto md:flex md:flex-row flex-col justify-between items-center">
                    <div>
                        <p>&copy; 2023 Your Company Name</p>
                    </div>
                    <div className='flex flex-row md:mt-0 mt-5'>
                       <Facebook className='mx-3 bg-gray-200 w-20 h-16 rounded-full'/>
                       <Instagram className='mx-3 bg-gray-200 w-20 h-16 rounded-full'/>
                       <Twitter className='mx-3 bg-gray-200 w-20 h-16 rounded-full'/>
                       <Linkedin className='mx-3 bg-gray-200 w-20 h-16 rounded-full'/>
                       <Mail className='mx-3 bg-gray-200 w-20 h-16 rounded-full'/>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
