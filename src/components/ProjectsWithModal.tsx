import { useModal } from '../hooks/useModal';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/portfolio';

interface Props {
  projects: Project[];
}

export default function ProjectsWithModal({ projects }: Props) {
  const { isOpen, selectedProject, openModal, closeModal } = useModal();

  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group overflow-hidden relative h-[300px] md:h-[400px] bg-dark-card rounded-2xl flex flex-col hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 200}ms` }}
            onClick={() => openModal(project)}
          >
            <div className="relative flex flex-col w-full h-full">
              <div className="flex flex-col gap-2 md:gap-4 items-start p-6 md:p-8 lg:p-10 text-left">
                <h3 className="text-left text-lg md:text-xl lg:text-3xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-primary-300 group-hover:to-primary-200 group-hover:scale-105 transition-all duration-500">
                  {project.title}
                </h3>
                <p className="w-full text-gray-400 group-hover:text-gray-300 text-left text-sm lg:text-lg font-light tracking-tight leading-relaxed text-balance transition-colors duration-500">
                  {project.subtitle}
                </p>
              </div>

              <div className="absolute left-0 right-0 -bottom-4 lg:-bottom-20 flex items-center justify-center">
                <div className="relative w-full h-3/4">
                  <img
                    src={project.screenshot}
                    alt={project.altText || project.title}
                    loading="lazy"
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover object-top z-0 rounded-sm group-hover:brightness-110 group-hover:contrast-105 transition-all duration-700 ${
                      project.mockup.includes('mobile')
                        ? 'w-[32%] h-[74%] md:h-[66%] mt-2 md:mt-0 -translate-y-[48%] md:-translate-y-[48%]'
                        : 'w-[85%] h-[72%] md:h-[62%] mt-4 md:mt-0 -translate-y-[45%] md:-translate-y-[45%]'
                    }`}
                  />
                  <img
                    src={project.mockup}
                    loading="lazy"
                    className="object-contain w-full h-full group-hover:drop-shadow-xl transition-all duration-700 z-10 relative pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  );
}