import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 text-sm">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none"
            placeholder="Buscar particpante..."
          />
        </div>
      </div>
      <div className="rounded-lg border border-white/10">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-white/10 ">
              <th className="w-12 px-4 py-3 text-left text-sm font-semibold">
                <input
                  type="checkbox"
                  className="size-4 rounded border-white/10 bg-black/20"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Código
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Participantes
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Data de inscrição
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Data de check-in
              </th>
              <th className="w-16 px-4 py-3 text-left text-sm font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 rounded border-white/10 bg-black/20"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">12345</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Jecilia Teixeira
                      </span>
                      <span>Jeciliateixeira@gmail.com</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5 ">
                      <MoreHorizontal className="size-4 " />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="px-4 py-3 text-sm text-zinc-300">
                Mostrando 10 de 220 items
              </td>
              <td
                colSpan={3}
                className="px-4 py-3 text-right text-sm text-zinc-300"
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página de 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5 ">
                      <ChevronsLeft className="size-4 " />
                    </button>
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5 ">
                      <ChevronLeft className="size-4 " />
                    </button>
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5 ">
                      <ChevronRight className="size-4 " />
                    </button>
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5 ">
                      <ChevronsRight className="size-4 " />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
