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

    <InputModal/>

    <FabButton @click="()=>console.log('Clicked')">
      <AddCircle/>
    </FabButton> />
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import InputModal from '@/modules/common/components/InputModal.vue';

</script>
