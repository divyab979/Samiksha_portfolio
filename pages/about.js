import About from '@/components/About'
import Navbar from '@/components/Navbar'

const about = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar/>
      <About/>
    </main>
  )
}

export default about