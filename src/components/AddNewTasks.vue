<template>
  <div class="container">
    <form @submit.prevent="handleSubmitTasks">
      <aside>
        <input type="text" placeholder="i want to ..." v-model="newTask" />
        <button type="submit">Add</button>
      </aside>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../Stores/TodoStore";

const taskStore = useTodoStore();

const newTask = ref("");
const handleSubmitTasks = () => {
  if (newTask.value.length > 0) {
    taskStore.addNewTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 1000),
    }),
      (newTask.value = "");
  }
};
</script>

<style scoped>
.container {
  width: 40%;

  padding: 0.4rem;
  margin: 0.3rem 0;
}
aside {
  display: flex;
  justify-content: space-between;
}
input {
  width: 80%;
  border: 1px solid #ccc;
  padding: 0.6rem;
  outline: none;
}

button {
  background-color: rgb(81, 0, 255);
  color: white;
  width: 20%;
}
</style>
