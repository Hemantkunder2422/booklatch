import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '@/components/ComingSoon'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="h-full">
      <ComingSoon/>
    </div>
  )
}
