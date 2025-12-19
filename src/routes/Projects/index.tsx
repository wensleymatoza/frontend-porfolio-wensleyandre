import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Projects/')({
  component: ProjectsPage,
})

export default function ProjectsPage() {
  return <div>Hello "/Projects/"!</div>
}
