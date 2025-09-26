import { useState } from 'react';
import type { Project } from '../data/portfolio';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return {
    isOpen,
    selectedProject,
    openModal,
    closeModal,
  };
}