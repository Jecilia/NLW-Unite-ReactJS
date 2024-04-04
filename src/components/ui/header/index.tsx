import { NavLink } from './nav-lint'
import { Logo } from './logo'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <Logo />
      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}
