import { useEffect } from 'react';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isMobile = project.mockup.includes('mobile');
  const screenshotClasses = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover z-0 rounded-sm ${
    isMobile ? 'w-[32%] h-[74%] -translate-y-[48%]' : 'w-[85%] h-[72%] -translate-y-[45%]'
  }`;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 opacity-0 invisible transition-all duration-300 animate-in"
      style={{ opacity: 1, visibility: 'visible' }}
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-dark-card via-dark-card to-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-primary-500/10 transform scale-95 transition-all duration-300 animate-in"
        style={{ transform: 'scale(1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-primary-500/20 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent">
          <h2 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-primary-100 to-primary-300">
            {project.title}
          </h2>
          <button
            className="text-gray-400 hover:text-primary-300 transition-all duration-300 p-2 hover:bg-primary-500/10 rounded-lg group"
            onClick={onClose}
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
          {/* Image */}
          <div className="lg:w-1/2 p-6 flex items-center justify-center bg-gradient-to-br from-primary-900/20 via-dark-section to-secondary-900/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-sm w-full z-10">
              <img
                src={project.screenshot}
                alt={project.altText || project.title}
                className={screenshotClasses}
              />
              <img
                src={project.mockup}
                alt=""
                className="object-contain w-full h-full z-10 relative pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto bg-gradient-to-b from-transparent to-primary-500/5">
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-200 italic leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-500 mb-4 flex items-center gap-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 text-primary-200 px-4 py-2 rounded-xl text-sm text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-500 mb-4 flex items-center gap-3">
                Ce que j'ai réalisé
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-200 group">
                    <div className="w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mt-1.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live URL */}
            {project.liveUrl && project.liveUrl !== '#' && (
              <div className="pt-6 border-t border-primary-500/20">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-xl font-medium hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 group"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Voir le site en ligne
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
