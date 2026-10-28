import { ArrowDown, ArrowRight } from 'lucide-react'
import { BlueprintMark } from '../components/BlueprintMark'
import { ButtonLink } from '../components/ButtonLink'
import { contact } from '../data/contact'

const deliverables = ['Sites institucionais', 'Landing pages', 'Sistemas web', 'Integrações']

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ink-950 text-text-inverse"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_70%_40%,#000_30%,transparent_80%)]"
      />

      <div className="container-site grid items-center gap-x-12 gap-y-14 pt-34 pb-20 lg:grid-cols-12 lg:pt-40 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="label flex items-center gap-3 text-atlas-300">
            <span aria-hidden="true" className="h-px w-8 bg-atlas-300/50" />
            Desenvolvimento de software sob medida
          </p>

          <h1 id="hero-title" className="mt-7 text-display text-white">
            Sites e sistemas feitos para o jeito que o seu negócio{' '}
            <span className="text-atlas-400">funciona.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lead text-text-inverse-muted">
            A Atlas Software desenvolve sites, landing pages e sistemas web para empresas e profissionais que
            precisam de mais do que um modelo pronto. Você explica a necessidade; nós transformamos em um projeto
            claro, construído em etapas que você acompanha.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contact.whatsappUrl} external icon={<ArrowRight size={18} />}>
              Conversar sobre um projeto
            </ButtonLink>
            <ButtonLink href="#projetos" variant="secondary-dark" icon={<ArrowDown size={18} />}>
              Ver projetos
            </ButtonLink>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <BlueprintMark />
          <figcaption className="label mt-4 flex justify-between gap-4 border-t border-line-dark pt-3 text-text-inverse-muted">
            <span>Fig. 01</span>
            <span className="text-right">Geometria do símbolo Atlas</span>
          </figcaption>
        </figure>
      </div>

      <div className="border-t border-line-dark">
        <ul
          aria-label="O que desenvolvemos"
          className="container-site grid grid-cols-2 md:grid-cols-4"
        >
          {deliverables.map((item, position) => (
            <li
              key={item}
              className="flex items-baseline gap-3 border-line-dark py-5 text-ui text-text-inverse max-md:odd:border-r max-md:even:pl-4 max-md:[&:nth-child(-n+2)]:border-b md:border-l md:pl-5 md:first:border-l-0 md:first:pl-0"
            >
              <span className="label text-atlas-300" aria-hidden="true">
                0{position + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
