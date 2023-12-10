import Admin from '@/components/Admin'
import Navbar from '@/components/Navbar'

const index = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar/>
      <Admin/>
    </main>
  )
}

export default index