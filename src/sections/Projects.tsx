import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { projects, type Project } from '../data/projects'

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="border-y border-line bg-white py-section"
    >
      <div className="container-site">
        <SectionHeading
          id="projetos-title"
          index="02"
          eyebrow="Projetos"
          title="Sistemas em uso por negócios reais"
          intro="Projetos desenvolvidos pela Atlas, com as capturas tiradas dos próprios sites publicados."
        />

        <div className="mt-16 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {projects.map((project, position) => (
            <ProjectEntry key={project.id} project={project} reversed={position % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectEntryProps {
  project: Project
  reversed: boolean
}

function ProjectEntry({ project, reversed }: ProjectEntryProps) {
  const titleId = `projeto-${project.id}`
  return (
    <article aria-labelledby={titleId} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
        {project.images ? <ProjectScreens images={project.images} /> : <ProjectPlate project={project} />}
      </div>

      <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <p className="label flex flex-wrap items-center gap-x-5 gap-y-1 text-text-muted">
          <span>{project.segment}</span>
          <span className="inline-flex items-center gap-1.5 text-atlas-600">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
            {project.status}
          </span>
        </p>
        <h3 id={titleId} className="mt-4 text-subtitle leading-tight tracking-[-0.025em] text-text">
          {project.name}
        </h3>
        <p className="mt-4 text-text-muted">{project.context}</p>

        <h4 className="label mt-7 text-text">O que foi construído</h4>
        <ul className="mt-3 space-y-2.5">
          {project.solution.map((item) => (
            <li key={item} className="flex gap-3 text-base text-text">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-atlas-600" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-7 font-mono text-meta text-text-muted">
          <span className="sr-only">Tecnologias: </span>
          {project.stack.join(' / ')}
        </p>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b border-atlas-600/40 font-medium text-atlas-600 transition-colors duration-(--duration-fast) hover:border-atlas-600"
          >
            Visitar o site
            <ArrowUpRight
              aria-hidden="true"
              size={17}
              className="transition-transform duration-(--duration-fast) group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only"> do projeto {project.name} (abre em nova aba)</span>
          </a>
        )}
      </div>
    </article>
  )
}

function ProjectScreens({ images }: { images: NonNullable<Project['images']> }) {
  const { desktop, mobile } = images
  return (
    <div className="relative pr-[12%] pb-[10%]">
      <img
        src={desktop.src}
        width={desktop.width}
        height={desktop.height}
        alt={desktop.alt}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-md border border-line shadow-raise"
      />
      <img
        src={mobile.src}
        width={mobile.width}
        height={mobile.height}
        alt={mobile.alt}
        loading="lazy"
        decoding="async"
        className="absolute right-0 bottom-0 h-auto w-[24%] rounded-md border-4 border-ink-950 shadow-raise"
      />
    </div>
  )
}

/** Projeto sem site público: apresentado só com texto, sem simular telas. */
function ProjectPlate({ project }: { project: Project }) {
  return (
    <div className="blueprint-grid relative flex min-h-72 flex-col justify-between gap-10 overflow-hidden rounded-md sm:aspect-[16/10] sm:min-h-0 bg-ink-900 p-8 text-text-inverse sm:p-10">
      <p className="label text-atlas-300">Acesso restrito ao estabelecimento</p>
      <div>
        <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          {project.name}
        </p>
        <p className="mt-4 max-w-sm text-text-inverse-muted">
          Sistema de gestão usado internamente, por isso não há página pública para mostrar.
        </p>
      </div>
    </div>
  )
}
