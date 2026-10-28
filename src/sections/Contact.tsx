import { ArrowRight, AtSign } from 'lucide-react'
import lockup from '../assets/brand/atlas-lockup.webp'
import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { contact } from '../data/contact'

const firstMessageTips = [
  'O que o seu negócio faz e para quem',
  'O que você precisa resolver ou divulgar',
  'Se já existe site, sistema ou domínio',
  'Se há uma data importante no horizonte',
]

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative isolate overflow-hidden bg-ink-950 py-section text-text-inverse"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]"
      />
      <div className="container-site grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            id="contato-title"
            index="06"
            eyebrow="Contato"
            tone="dark"
            title="Conte o que você precisa construir."
            intro="A conversa começa pelo WhatsApp. A partir dela, você recebe uma proposta com escopo, etapas e investimento."
          />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contact.whatsappUrl} external icon={<ArrowRight size={18} />}>
              Pedir orçamento pelo WhatsApp
            </ButtonLink>
            <ButtonLink
              href={contact.instagramUrl}
              external
              variant="secondary-dark"
              icon={<AtSign size={18} />}
            >
              Acompanhar no Instagram
            </ButtonLink>
          </div>

          <div className="mt-14 max-w-xl border-t border-line-dark pt-8">
            <h3 className="label text-text-inverse">Para agilizar a primeira conversa, vale contar:</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {firstMessageTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-ui text-text-inverse-muted">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-atlas-400" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <img
            src={lockup}
            alt=""
            width={720}
            height={623}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-sm opacity-95"
          />
        </div>
      </div>
    </section>
  )
}
