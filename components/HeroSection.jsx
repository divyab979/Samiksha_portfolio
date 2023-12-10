import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-left mt-24 text-center sm:text-left '>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello this is{""} </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Samiksha ",
                1000,
                "Web developer",
                1000
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity} />
          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            Student of Data Science
          </p>
          <div>
            <button
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white hover:scale-x-110 duration-300'
            >
              <a
                href="mailto:divyab979@gmail.com"
                className='block'
              >
                Hire me
              </a>
            </button>
            <button
              className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 hover:scale-x-110 duration-300'
            >
              <a
                href="https://drive.google.com/file/d/1pnzfU9nFM1eCcIhI-RD1t5nepxaXF78s/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className='col-span-5 ppace-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src="/pfp.png"
              alt='hello'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden w-100'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection