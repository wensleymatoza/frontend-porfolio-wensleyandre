import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Projects/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Projects/$id"!</div>
}
