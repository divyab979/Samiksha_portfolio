import Navbar from '@/components/Navbar'
import Project_cards from '@/components/Project_cards'

const projects = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
        <Project_cards />
      </div>
    </main>
  )
}

export default projects