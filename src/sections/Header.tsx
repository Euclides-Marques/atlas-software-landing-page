import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { Logo } from '../components/Logo'
import { contact, navigation } from '../data/contact'
import { useScrolled } from '../hooks/useScrolled'

export function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }

    // Fecha o menu mobile se a janela crescer até o layout desktop.
    const desktop = window.matchMedia('(min-width: 64rem)')
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-(--duration-base) ${
        solid ? 'border-line-dark bg-ink-950' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-site flex h-18 items-center justify-between gap-6">
        <a href="#inicio" className="-m-2 rounded-sm p-2" aria-label="Atlas Software — voltar ao início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-ui text-text-inverse-muted transition-colors duration-(--duration-fast) hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={contact.whatsappUrl} external className="max-sm:hidden">
            Pedir orçamento
            <span className="sr-only"> pelo WhatsApp</span>
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Menu"
        hidden={!menuOpen}
        className="border-t border-line-dark bg-ink-950 lg:hidden"
      >
        <ul className="container-site flex flex-col py-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex min-h-12 items-center border-b border-line-dark text-lg text-text-inverse"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-5 pb-2">
            <ButtonLink
              href={contact.whatsappUrl}
              external
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Pedir orçamento pelo WhatsApp
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
