
import Navbar from '@/components/Navbar'
import { createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <div className='min-h-screen bg-slate-700'>
    <Navbar />
    </div>
    </>
  )
}

