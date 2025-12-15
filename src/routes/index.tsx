import Navbar from '@/components/Navbar'
import { createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  head:() => ({
    meta: [
      {title: 'Home Page | Monarch'},
    ]
  })
})

function RouteComponent() {
  return (
    <>
    <div className='min-h-screen  bg-orange-200'>
    <Navbar />
    </div>
    </>
  )
}

