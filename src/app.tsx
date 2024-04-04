import { AttendeeList } from './components/ui/attendee-list'
import { Header } from './components/ui/header'

export function App() {
  return (
    <div className="mx-auto flex max-w-[1216px] flex-col gap-5 py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
