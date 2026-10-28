import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'secondary-dark'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  icon?: ReactNode
  external?: boolean
}

const base =
  'group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm px-5 text-ui font-medium ' +
  'transition-[background-color,border-color,color] duration-(--duration-fast) ease-(--ease-out-soft)'

const variants: Record<Variant, string> = {
  primary: 'bg-atlas-600 text-white hover:bg-atlas-700',
  secondary: 'border border-text/20 text-text hover:border-text/60',
  'secondary-dark': 'border border-white/20 text-text-inverse hover:border-white/60',
}

export function ButtonLink({
  href,
  variant = 'primary',
  icon,
  external = false,
  className = '',
  children,
  ...rest
}: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...rest}>
      {children}
      {icon && (
        <span
          aria-hidden="true"
          className="transition-transform duration-(--duration-fast) ease-(--ease-out-soft) group-hover:translate-x-0.5"
        >
          {icon}
        </span>
      )}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  )
}
