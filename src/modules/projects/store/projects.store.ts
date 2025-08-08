import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';

const initalLoad = (): Project[] => {
  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [
        { id: '1', name: 'Task 1' },
        { id: '2', name: 'Task 2', completedAt: new Date() },
        { id: '3', name: 'Task 3' },
      ],
    },
    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [
        { id: '1', name: 'Task 1' },
        { id: '2', name: 'Task 2' },
        { id: '3', name: 'Task 3' },
      ],
    },
  ];
};

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initalLoad());

  const addProject = (name: string) => {
    if (name.length === 0) return;
    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  return {
    //Properties
    // projects,

    //Methods
    projectsList: computed(() => projects.value),

    // Actions
    addProject,
  };
});
