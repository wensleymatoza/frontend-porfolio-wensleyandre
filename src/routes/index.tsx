
import HomePage from '@/components/Homepage/HomePage'
import Navbar from '@/components/Navbar/Navbar'
import { createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    {/* bg-color is called egg white*/}
    <div className='min-h-screen bg-[#FDFDFD]'> 
    <Navbar />
    <HomePage />
    </div>
    </>
  )
}

