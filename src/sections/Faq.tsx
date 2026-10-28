import { Plus } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { contact } from '../data/contact'
import { faq } from '../data/content'

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="border-t border-line bg-paper-2 py-section">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            id="duvidas-title"
            index="05"
            eyebrow="Dúvidas"
            title="Perguntas frequentes"
            intro={
              <>
                Não encontrou a sua?{' '}
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-atlas-600 underline decoration-atlas-600/40 underline-offset-4 hover:decoration-atlas-600"
                >
                  Pergunte pelo WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                .
              </>
            }
          />
        </div>

        <div className="border-t border-line lg:col-span-8">
          {faq.map((item) => (
            <details key={item.question} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium text-text [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  aria-hidden="true"
                  size={20}
                  className="shrink-0 text-atlas-600 transition-transform duration-(--duration-base) ease-(--ease-out-soft) group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-7 text-text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
