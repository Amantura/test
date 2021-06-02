<template>
  <header class="sticky top-0 flex items-center justify-between w-full h-16 px-4 bg-blue-100 rounded-b-md">
    <div class="font-bold text-blue-500">Контакты</div>
    <div>
      <button class="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md active:opacity-75" @click="$emit('open')">
        Добавить
      </button>
    </div>
  </header>
</template>
