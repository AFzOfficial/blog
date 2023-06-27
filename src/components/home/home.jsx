import { Link } from 'react-router-dom'

import { Footer } from '../index'

import { FaGithub, FaDiscord, FaInstagram, FaLinkedinIn, FaTwitter, FaDev, FaTelegramPlane, FaGitlab } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { HiMiniArrowSmallRight } from 'react-icons/hi2'


function Home() {
    return (
        <>
        <div className="max-w-screen-lg h-screen mx-auto flex flex-col justify-center items-center px-2">

            <img src="./img/avatar.webp" alt="photo" className="w-32 h-32 rounded-full mt-10 border-2 border-zinc-800" />

            <h1 dir='auto' className="mt-6 text-2xl">ABolFazL Personal Blog</h1>

            <p dir='auto' className="px-4 my-4 text-center">sometimes just about the ABolFazl</p>

            <div className='grid grid-cols-3 gap-4 mb-16'>

                <a target='_blank' href='https://github.com/AFzOfficial' className='hover:bg-zinc-800 p-2 rounded-full transition duration-100'>
                    <FaGithub className='w-7 h-7' />
                </a>
                {/* <a href='#' className='hover:bg-zinc-800 p-2 rounded-full'>
                <FaDiscord className='w-7 h-7' />
                </a>
                <a target='_blank' href='#' className='hover:bg-zinc-800 p-2 rounded-full'>
                <FaInstagram className='w-7 h-7' />
                </a>
                <a target='_blank' href='#' className='hover:bg-zinc-800 p-2 rounded-full'>
                <FaLinkedinIn className='w-7 h-7' />
                </a> */}
                {/* <a target='_blank' href='#' className='hover:bg-zinc-800 p-2 rounded-full transition duration-100'>
                    <FaTelegramPlane className='w-7 h-7' />
                </a> */}
                <a target='_blank' href='https://twitter.com/AFzOfficial' className='hover:bg-zinc-800 p-2 rounded-full transition duration-100'>
                    <FaTwitter className='w-7 h-7' />
                </a>
                {/* <a target='_blank' href='#' className='hover:bg-zinc-800 p-2 rounded-full'>
                <FaDev className='w-7 h-7' />
                </a> */}
                {/* <a target='_blank' href='#' className='hover:bg-zinc-800 p-2 rounded-full transition duration-100'>
                    <FaGitlab className='w-7 h-7' />
                </a> */}
                <a target='_blank' href='https://donate.pycloud.space' className='hover:bg-zinc-800 p-2 rounded-full transition duration-100'>
                    <FiCoffee className='w-7 h-7' />
                </a>
            </div>


            <Link to={'/logs'}>
                <button className="sm:hidden flex items-center text-gray-100 px-10 py-1.5 rounded-lg border border-zinc-700 transition hover:bg-gray-100 hover:text-black">
                    Logs
                    <HiMiniArrowSmallRight />
                </button>             
            </Link>

        </div>

<Footer />
</>
    )
}

export default Home
