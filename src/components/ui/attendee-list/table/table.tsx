import { ComponentProps } from 'react'

interface TableProps extends ComponentProps<'table'> {}
export function Table(props: TableProps) {
  return (
    <div className="rounded-lg border border-white/10">
      <table {...props} className="w-full " />
    </div>
  )
}
