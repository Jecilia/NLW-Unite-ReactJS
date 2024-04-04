import { Logo } from './logo'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <Logo />
      <nav className="flex items-center gap-5">
        <a href="" className="text-sm font-medium text-zinc-300">
          Eventos
        </a>
        <a href="" className="text-sm font-medium">
          Partcipantes
        </a>
      </nav>
    </div>
  )
}
