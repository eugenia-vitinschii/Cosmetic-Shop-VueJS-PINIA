//useAutoSave.ts

import { onBeforeMount, ref } from 'vue'

export function useAutoSave<T extends (...args: any[]) => Promise<any>> (fn: T, delay = 600) {
   const timeout = ref<ReturnType<typeof setTimeout> | null>(null)
   const isSaving = ref(false)
   const isSaved = ref(false)

   const save = (...args: Parameters<T>) => {
      if (timeout.value) clearTimeout(timeout.value)
         isSaving.value = true
         isSaved.value = true

      timeout.value = setTimeout(async () => {
         try {
            await fn(...args)
            isSaved.value = true
         } catch (err){
            console.error("AutoSave error:", err)
         } finally{
            isSaving.value = false
            setTimeout(() => (isSaved.value = false), 1500)
         }
      }, delay)
   }

   onBeforeMount(() => {
      if(timeout.value) clearTimeout(timeout.value)
   })

   return { save, isSaved, isSaving}
}

