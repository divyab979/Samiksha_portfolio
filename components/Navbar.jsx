import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link
            href={"/"}
            className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold'>
                Samiksha Kathale
            </Link>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex gap-10'>
                    <li>
                        <Link href={"about"} className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white hover:scale-125 duration-300 '>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={"projects"} className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white hover:scale-125 duration-300 '>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar