import type { ReactNode } from 'react'

interface SectionHeadingProps {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'light' | 'dark'
}

/** Cabeçalho de seção com numeração técnica ("/02 — Serviços"), título e introdução. */
export function SectionHeading({ id, index, eyebrow, title, intro, tone = 'light' }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className="max-w-2xl">
      <p className={`label flex items-center gap-3 ${dark ? 'text-atlas-300' : 'text-atlas-600'}`}>
        <span>/{index}</span>
        <span aria-hidden="true" className={`h-px w-8 ${dark ? 'bg-atlas-300/50' : 'bg-atlas-600/40'}`} />
        <span>{eyebrow}</span>
      </p>
      <h2
        id={id}
        className={`mt-5 text-title ${dark ? 'text-white' : 'text-text'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lead ${dark ? 'text-text-inverse-muted' : 'text-text-muted'}`}>{intro}</p>
      )}
    </div>
  )
}
