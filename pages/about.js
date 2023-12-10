import Navbar from '@/components/Navbar'
import About from '@/components/about'

const about = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar/>
      {/* <div class="container mx-auto px-12 py-4">
        <HeroSection />
      </div> */}
      <About/>
    </main>
  )
}

export default about