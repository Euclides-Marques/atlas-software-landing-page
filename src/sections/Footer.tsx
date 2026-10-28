import { Logo } from '../components/Logo'
import { contact, navigation } from '../data/contact'

const channels = [
  { href: contact.whatsappUrl, label: `WhatsApp ${contact.whatsappDisplay}` },
  { href: contact.instagramUrl, label: `Instagram ${contact.instagramHandle}` },
  { href: contact.linktreeUrl, label: 'Linktree' },
]

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink-950 text-text-inverse-muted">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-xs text-ui">
            Sites, landing pages, sistemas web e integrações desenvolvidos sob medida.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="label text-text-inverse">Navegação</h2>
          <ul className="mt-5 space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-10 items-center hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="label text-text-inverse">Canais oficiais</h2>
          <ul className="mt-5 space-y-1">
            {channels.map((channel) => (
              <li key={channel.href}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center hover:text-white"
                >
                  {channel.label}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <p className="container-site py-6 text-sm">© {new Date().getFullYear()} Atlas Software</p>
      </div>
    </footer>
  )
}
