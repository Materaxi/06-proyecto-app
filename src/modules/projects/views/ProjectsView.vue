<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->

        <!-- row 2 -->
        <tr v-for="(project, index) in projectsStore.projectsWithCompletion" :key="project.id"
          class="hover:bg-base-300">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress class="progress progress-primary w-56" :value="project.complition" max="100">
            </progress>
            {{ project.complition }}%
          </td>
        </tr>
        <!-- row 3 -->

      </tbody>
    </table>


  </div>

  <InputModal :open="modelOpen" @close="modelOpen = false" @value="projectsStore.addProject"
    placeholder="Ingrese el Nombre del proyecto" title="Nuevo Proyecto" subtitle="Ingrese el Nombre del Proyecto" />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h3 class="font-bold text-lg">Header Content</h3>

    </template>

    <template #body>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus a nulla nihil pariatur maiores tempora
        vitae ad consectetur, rerum ut? Maxime adipisci, commodi assumenda dolorum nostrum porro quod dolores ullam eos
        odit facere soluta minus qui eligendi veritatis exercitationem nesciunt, dolorem esse! Optio commodi adipisci
        voluptatem necessitatibus veritatis corrupti!
      </p>

    </template>

    <template #footer>
      <div class="flex justify-end ">

        <button @click="customModalOpen = false" class="btn mr-4">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>

    </template>

  </custom-modal>

  <FabButton position="top-right" @click="modelOpen = true">
    <AddCircle />
  </FabButton>

  <FabButton position="bottom-left" @click="customModalOpen = true">
    <AddCircle />
  </FabButton>


</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import { ref } from 'vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import { useProjectsStore } from '../store/projects.store';

const modelOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();


</script>
