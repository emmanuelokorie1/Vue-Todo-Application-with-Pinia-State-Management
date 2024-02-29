<script setup>
import { ref } from "vue";
import { useTodoStore } from "./Stores/TodoStore";
import TaskComponent from "./components/TaskComponent.vue";
import AddNewTasks from "./components/AddNewTasks.vue";
import { storeToRefs } from "pinia";

const getTodo = useTodoStore();

const toggle = ref(true);

const toggleView = () => {
  toggle.value = !toggle.value; // Toggles the value of toggle
}

const {name, isLoading, tasks, fav, fetchTasks} = storeToRefs(getTodo)

getTodo.fetchTasks()
</script>

<template>
  <nav>
    <div>{{ name }}</div>
    <div>Todo</div>
  </nav>
  <div class="formDiv"><AddNewTasks/></div>
  <div class="loading" v-if="isLoading">Loading...</div>
  <div v-if="toggle">
    <div class="header">
      <p>You have [ {{ tasks.length }} ] more Tasks to do</p>
      <button @click="toggleView">See Fav</button>
    </div>
    <div class="taskContainer" v-for="list in tasks">
      <TaskComponent :list="list" />
    </div>
  </div>
  <div v-if="!toggle">
    <div class="header">
      <p>You have [ {{ fav.length }} ] more Favs to do</p>
      <button @click="toggleView">See All</button>
    </div>
    <div class="taskContainer" v-for="list in fav">
      <TaskComponent :list="list" />
    </div>
  </div>
</template>

<style scoped>
.taskContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  padding: 0.8rem 0;
  margin-bottom: 1rem;
}

.header {
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
}

button{
  background-color: #ccc;
  padding: .4rem 1rem;
  border-radius: .3rem;
}

.formDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
