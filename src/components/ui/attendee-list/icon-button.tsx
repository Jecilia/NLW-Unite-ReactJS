import { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={
        transparent
          ? 'rounded-md border-white/10 bg-black/20 p-1.5'
          : 'rounded-md border border-white/10 bg-white/10 p-1.5 '
      }
    />
  )
}
