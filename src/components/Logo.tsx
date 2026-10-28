import mark from '../assets/brand/atlas-mark.webp'
import wordmark from '../assets/brand/atlas-wordmark.webp'

interface LogoProps {
  className?: string
}

/**
 * Versão horizontal da logo para o header e o rodapé (sempre sobre fundo escuro).
 * Símbolo e "ATLAS" são recortes da arte original; "SOFTWARE" é texto para continuar
 * legível em tamanho pequeno.
 */
export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img src={mark} alt="" width={46} height={36} className="h-9 w-auto" />
      <span className="flex w-[98px] flex-col gap-[5px]">
        <img src={wordmark} alt="Atlas Software" width={98} height={15} className="h-[15px] w-auto" />
        <span
          aria-hidden="true"
          className="flex justify-between font-display text-[0.5625rem] leading-none font-medium text-silver"
        >
          {'SOFTWARE'.split('').map((letter, position) => (
            <span key={position}>{letter}</span>
          ))}
        </span>
      </span>
    </span>
  )
}
