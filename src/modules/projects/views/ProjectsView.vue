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
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <!-- row 3 -->

      </tbody>
    </table>


  </div>

  <InputModal :open="modelOpen" @close="modelOpen = false" @value="onNewValue"
    placeholder="Ingrese el Nombre del proyecto" title="Nuevo Proyecto" subtitle="Ingrese el Nombre del Proyecto" />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h3 class="font-bold text-lg">Header Content</h3>

    </template>



    <template #body>

      <p>Texto</p>

    </template>

    <template #footer>
      <button @click="customModalOpen=false" class="btn mr-4">Close</button>
      <button @click="customModalOpen=false" class="btn btn-primary">Aceptar</button>
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

const modelOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName })
}
</script>
