import { SectionHeading } from '../components/SectionHeading'
import { principles } from '../data/content'

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-section">
      <div className="container-site">
        <SectionHeading id="sobre-title" index="04" eyebrow="Sobre" title="Engenharia a serviço do seu negócio" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 text-lead text-text-muted lg:col-span-5">
            <p>
              Na mitologia, Atlas sustenta o mundo nos ombros. Também dá nome ao livro de mapas. A Atlas Software
              trabalha com as duas ideias: entender primeiro como o seu negócio funciona e depois construir uma base
              técnica que aguente o dia a dia.
            </p>
            <p>
              Isso significa ouvir antes de propor, explicar as escolhas em linguagem simples e entregar software
              organizado, que possa ser mantido e evoluído com o tempo.
            </p>
          </div>

          <ul className="grid border-t border-line sm:grid-cols-2 lg:col-span-7">
            {principles.map((principle, position) => (
              <li
                key={principle.title}
                className="border-b border-line py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="label text-atlas-600" aria-hidden="true">
                  {String.fromCharCode(65 + position)}
                </span>
                <h3 className="mt-3 text-xl tracking-[-0.02em] text-text">{principle.title}</h3>
                <p className="mt-2 text-text-muted">{principle.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
