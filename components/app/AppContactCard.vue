<template>
  <div class="flex border rounded-md cursor-pointer space-x-4 items-center" @click="$emit('preview', item)">
    <div class="w-4/12 h-32 bg-gray-100 rounded-md bg-center bg-cover bg-no-repeat" :style="item.imageUrl ? `background-image: url(${item.imageUrl})` : ''">

    </div>

    <div class="w-8/12 flex flex-col">
      <h2 class="font-bold">{{ item.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
