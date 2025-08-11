<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No Name'" />
    </section>

    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>

            </tr>
          </thead>
          <tbody>

            <tr v-for="task in project?.tasks" :key="task.id" class="hover:bg-base-300">
              <th>
                <input type="checkbox" class="checkbox checkbox-primary" :checked="!!task.completedAt"
                  @change="projectStore.toggleTask(project?.id ?? '', task.id)" />
              </th>
              <td>{{ task.name }}</td>
              <td>{{task.completedAt}}</td>

            </tr>

            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva Tarea..." v-model="newTask" @keyup.enter="addTask" />
              </td>
              <td></td>

            </tr>

          </tbody>
        </table>
      </div>
    </section>

  </div>


</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}
const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | undefined>();
const newTask = ref("");

//const project = projectsStore.projectsList.find(p => p.id === props.id);

const addTask = () => {
  if (!project.value) return;
  projectStore.addTaskToProject(project.value.id, newTask.value);
  newTask.value = "";
}

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectsList.find(p => p.id === props.id);
    if (!project.value) {
      router.push('/');
    }
  },
  { immediate: true });
</script>
