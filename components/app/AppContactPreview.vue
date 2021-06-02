<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out transform"
    leave-active-class="transition-all duration-300 ease-out transform"
    enter-class="-translate-x-8 opacity-0"
    leave-to-class="-translate-x-8 opacity-0"
  >
    <div v-if="item && visible" class="sticky px-10 py-5 border rounded-md top-20">

      <transition
        enter-active-class="transition-all duration-300 ease-out transform"
        leave-active-class="transition-all duration-300 ease-out transform"
        enter-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div v-if="pending" class="absolute inset-0 z-10 flex items-center justify-center bg-white rounded-md">
          <div class="w-10 h-10 border-l border-blue-500 rounded-full animate-spin">

          </div>
        </div>
      </transition>

      <button class="absolute px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md top-5 right-5" @click="close">
        Закрыть
      </button>
      <img :src="item.imageUrl" class="object-contain w-full h-44" />

      <div class="py-5 space-y-4">
        <span class="flex items-center justify-between space-x-3">
          <span class="font-bold">
            ФИО:
          </span>
          <div class="flex-1 border-t border-dashed"></div>
          <span class="font-bold">
            {{ item.name }}
          </span>
        </span>
        <span class="flex items-center justify-between space-x-3">
          <span class="font-bold">
            Эл.почта:
          </span>
          <div class="flex-1 border-t border-dashed"></div>
          <span class="font-bold">
            {{ item.email }}
          </span>
        </span>
        <span class="flex items-center justify-between space-x-3">
          <span class="font-bold">
            Телефон:
          </span>
          <div class="flex-1 border-t border-dashed"></div>
          <span class="font-bold">
            {{ item.phone }}
          </span>
        </span>

        <div class="flex justify-between">
          <button class="px-3 py-2 text-sm text-white bg-green-500 rounded-md" @click="editItem">
            Редактировать
          </button>
          <button class="px-3 py-2 text-sm text-white bg-red-500 rounded-md" @click="deleteItem">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    item: undefined,
    visible: false,
    pending: false
  }),
  methods: {
    open(item = {}) {
      if (item.name) {
        this.pending = true
        setTimeout(() => {
          this.item = item
          this.pending = false
        }, 500)

        this.visible = true
      }
    },

    deleteItem() {
      this.$emit('delete', this.item)
      this.close()
    },

    editItem() {
      this.$emit('edit', this.item)
    },

    close() {
      this.visible = false
      this.item = undefined
    }
  }
}
</script>
