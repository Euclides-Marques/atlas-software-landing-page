import { SectionHeading } from '../components/SectionHeading'
import { processSteps } from '../data/content'

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="relative isolate overflow-hidden bg-ink-900 py-section text-text-inverse"
    >
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 -z-10 opacity-60" />
      <div className="container-site">
        <SectionHeading
          id="processo-title"
          index="03"
          eyebrow="Processo"
          tone="dark"
          title="Do primeiro contato à entrega, sem caixa-preta"
          intro="Você sabe em que etapa o projeto está e o que vem a seguir. Prazos e condições são definidos na proposta de cada projeto."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-md border border-line-dark bg-line-dark sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {processSteps.map((step, position) => (
            <li key={step.title} className="flex flex-col bg-ink-900 p-7 lg:min-h-80">
              <span className="flex items-center gap-3" aria-hidden="true">
                <span className="font-display text-4xl leading-none font-semibold tracking-[-0.04em] text-atlas-400">
                  {String(position + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-atlas-400/30" />
              </span>
              <h3 className="mt-8 text-lg leading-snug text-white">
                <span className="sr-only">Etapa {position + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 text-ui text-text-inverse-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
