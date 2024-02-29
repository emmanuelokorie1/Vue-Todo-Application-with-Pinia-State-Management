import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    tasks: [],
    isLoading: false
  }),
  getters: {
    fav() {
      return this.tasks.filter((t) => t.isFav);
    },
    name() {
      return "Emmzzy";
    },
  },
  actions: {
    async fetchTasks(){
        this.isLoading = true
        const res = await fetch('http://localhost:3000/tasks')
        const data = await res.json()

        this.tasks = data
        this.isLoading = false
    },
   async addNewTask(newTask) {
      this.tasks.push(newTask);

      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {'Content-Type': 'application/json'},
      })

      if (res.error) {
        console.log(res.error);
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });

      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE',
      })

      if (res.error) {
        console.log(res.error);
      }
    },
   async isFavTask(id) {
      const task = this.tasks.find((t) => t.id === id );
      task.isFav = !task.isFav


      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'PATCH',
        body: JSON.stringify({isFav: task.isFav}),
        headers: {'Content-Type': 'application/json'},
      })

      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
