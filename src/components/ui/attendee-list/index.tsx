import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../../../data/attendee'

export function AttendeeList() {
  const [, setSearch] = useState('')
  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 text-sm">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChanged}
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none"
            placeholder="Buscar particpante..."
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr className="border-b border-white/10 ">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 rounded border-white/10 bg-black/20"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow
                key={attendee.id}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 rounded border-white/10 bg-black/20"
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-zinc-300">
                  {attendee.createdAt.toString()}
                </TableCell>
                <TableCell>{attendee.checkedInAt.toString()}</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4 " />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 220 items</TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>Página de 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4 " />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4 " />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4 " />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4 " />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
