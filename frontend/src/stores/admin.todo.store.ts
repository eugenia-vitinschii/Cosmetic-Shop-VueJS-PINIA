//admin.todo.store.ts

import {defineStore} from 'pinia'

export interface Task {
  id: number
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', {
  state:() =>({
    tasks: [] as Task[]
  }),
  getters: {
    stats: (state) => ({
      total: state.tasks.length,
      done: state.tasks.filter(t => t.done).length
    })
  },
  actions: {
    addTask(text: string){
      const trimmed = text?.trim()

      if(!trimmed) return
      this.tasks.push({
        id: Date.now(),
        text: trimmed,
        done: false
      })
      this.saveToLocalStorage()
    },
    toggleTask(id: number){
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.done = !task.done
        this.saveToLocalStorage()
      } 
    },
    deleteTask(id: number){
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.saveToLocalStorage()
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(t => !t.done)
      this.saveToLocalStorage()
    },
    saveToLocalStorage(){
      try{
        localStorage.setItem('admin-tasks', JSON.stringify(this.tasks))
      } catch (e){
        console.warn('Cannot save tasks: ', e)
      }
    },
    loadFromLocalStorage(){
      try{
        const raw = localStorage.getItem('admin-tasks')

        if(raw){
          const parced = JSON.parse(raw) as Task[]
          if( Array.isArray(parced)){
            this.tasks = parced.map(p => ({
              id: p.id ?? Date.now(),
              text: String(p.text ?? ''),
              done: Boolean(p.done ?? false)
            }))
          }
        }
      } catch (e){
        console.warn('Cannot load tasks:', e)
      }
    }
  }
})