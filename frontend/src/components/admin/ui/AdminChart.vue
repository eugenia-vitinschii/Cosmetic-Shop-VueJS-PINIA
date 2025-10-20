<template>
  <div class="admin-chart">
   <p class="admin-body-text" >{{ title }}</p>
   <canvas ref="canvas" class="admin-chart__canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
//vue 
import {onMounted, ref, watch} from 'vue'

//chart imports
import {Chart, registerables} from 'chart.js'

//Component settings
defineOptions({
  name: 'AdminChart'
})

Chart.register(...registerables)

const props = defineProps<{
   title: string
   type: 'bar' | 'doughnut' | 'line' | 'pie'
   labels: string[]
   data: number[]
   color?:string

}>()

//variables
const canvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

onMounted(() => {
   if(!canvas.value) return

   chartInstance = new Chart(canvas.value, {
      type: props.type,
      data: { 
         labels: props.labels,
         datasets: [
            {
               label: props.title,
               data: props.data,
               backgroundColor: props.color || '#0095FF',
               borderColor: '#fff',
               borderWidth: 1
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins:{
            legend:{
               display: false
            },
         },
         layout:{
            padding:{
               bottom: 70
            }
         }
      }
   })
})


watch(() => props.data, (newData) => {
   if(chartInstance){
      chartInstance.data.datasets[0].data = newData
      chartInstance.update()
   }
})

</script>
