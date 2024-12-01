import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div className='flex items-center justify-between bg-blue-700 p-2 text-white font-semibold'>
        {/* Left side */}
        <div className='p-3'>
            Logo
        </div>
        {/* Mid */}
        <div>
            <ul className='flex items-center justify-between gap-3'>
                <li><Link  className='p-3 bg-blue-600 hover:bg-blue-800 rounded-lg w-28 text-center' href={"/"}>Home</Link></li>
                <li ><Link className='p-3 bg-blue-600 hover:bg-blue-800 rounded-lg w-28 text-center' href={"/generate"}>Shorten</Link></li>
                <li ><Link className='p-3 bg-blue-600 hover:bg-blue-800 rounded-lg w-28 text-center' href={"/about"}>About</Link></li>
                <li ><Link className='p-3 bg-blue-600 hover:bg-blue-800 rounded-lg w-28 text-center' href={"/contact"}>Contact us</Link></li>

            </ul>
        </div>
        {/* Right side */}
        <div className='flex gap-3'>
            <Link className='  p-3 bg-blue-600 hover:bg-blue-800 rounded-lg' href={"/generate"}><button>Try Now</button></Link>
            <Link className= 'p-3 bg-blue-600 hover:bg-blue-800 rounded-lg' href={"/guthub"}><button>GitHub</button></Link>

        </div>
    </div>
  )
}

export default navbar