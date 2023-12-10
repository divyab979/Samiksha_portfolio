import Navbar from '@/components/Navbar'
import About from '@/components/about'

const about = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar/>
      <About/>
    </main>
  )
}

export default about