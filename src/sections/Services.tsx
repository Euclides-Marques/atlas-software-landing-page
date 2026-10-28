import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/content'

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="py-section">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="servicos-title"
              index="01"
              eyebrow="Serviços"
              title="O que a Atlas constrói"
              intro="Cada serviço parte de um problema concreto do seu dia a dia, e não de uma tecnologia da moda."
            />
          </div>
        </div>

        <ol className="border-t border-line lg:col-span-8">
          {services.map((service, position) => (
            <li key={service.id} className="grid gap-5 border-b border-line py-9 sm:grid-cols-[4.5rem_1fr]">
              <span className="label pt-2 text-atlas-600" aria-hidden="true">
                /{String(position + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-2xl tracking-[-0.02em] text-text">{service.title}</h3>
                <dl className="mt-5 grid gap-6 md:grid-cols-2 md:gap-10">
                  <div>
                    <dt className="label text-text-muted">Quando faz sentido</dt>
                    <dd className="mt-2 text-text-muted">{service.when}</dd>
                  </div>
                  <div>
                    <dt className="label text-text-muted">O que você recebe</dt>
                    <dd className="mt-2 text-text">{service.outcome}</dd>
                  </div>
                </dl>
                <ul aria-label={`Inclui em ${service.title}`} className="mt-6 flex flex-wrap gap-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="rounded-xs border border-line bg-white px-2.5 py-1 text-sm text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
