<template>
  <div class="container">
    {{ list.title }}
    <div class="icons">
      <div class="del" @click="getTodo.deleteTask(list.id)">
        <vue-feather type="trash"></vue-feather>
      </div>
      <div 
        class="love" 
        :class="{ 'not': list.isFav }" 
        @click="getTodo.isFavTask(list.id)">
        <vue-feather type="heart"></vue-feather>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from "../Stores/TodoStore";

defineProps(["list"]);

const getTodo = useTodoStore();
</script>

<style scoped>
.container {
  width: 40%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  margin: 0.3rem 0;
}

.icons {
  color: #989898;
  display: flex;
  align-items: center;
  gap: 10px;
}

.del:hover,
.love:hover {
  cursor: pointer;
  color: red;
  transform: scale(1.05);
  transition: linear 0.4s;
}

.not{
  cursor: pointer;
  color: red;
}
</style>
