<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out transform"
    leave-active-class="transition-all duration-300 ease-out transform"
    enter-class="opacity-0 "
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      class="fixed inset-0 z-20 flex items-center justify-center w-full h-screen bg-black bg-opacity-25"
      @click.self="close">

      <form class="flex flex-col p-4 space-y-4 bg-white rounded-md w-96 " @submit.prevent="submit">
        <label>
          <input
            v-model="model.name"
            class="w-full p-4 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:bg-white focus:border-gray-300"
            placeholder="ФИО"
            type="text" />
        </label>
        <label>
          <input
            v-model="model.email"
            class="w-full p-4 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:bg-white focus:border-gray-300"
            placeholder="Эл.почта"
            type="email" />
        </label>
        <label>
          <input
            v-model="model.phone"
            v-mask="'+996 ### ## ## ##'"
            class="w-full p-4 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:bg-white focus:border-gray-300"
            placeholder="Номер телефона"
            type="text" />
        </label>
        <label>
          <input
            v-model="model.imageUrl"
            class="w-full p-4 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:bg-white focus:border-gray-300"
            placeholder="Ссылка на фото"
            type="text" />
        </label>

        <div
          v-if="model.imageUrl"
          class="relative w-full h-32 bg-gray-100 bg-center bg-no-repeat bg-contain rounded-md image-container"
          :style="`background-image: url(${model.imageUrl})`">

        </div>

        <button
          :disabled="!submitEnable"
          class="w-full py-3 text-white bg-blue-500 rounded-md disabled:opacity-50"
        >
          Сохранить
        </button>
      </form>
    </div>
  </transition>
</template>

<script>

import { morphism } from 'morphism'
export default {
  data: () => ({
    visible: true,
    model: undefined,
    edit: false
  }),

  computed: {
    submitEnable() {
      return (
        this.model.name &&
        this.model.email &&
        this.model.phone &&
        this.model.imageUrl
      )
    }
  },

  created() {
    this.setModel()
  },

  methods: {
    setModel(data = {}) {
      const schema = {
        id: s => s.id ? s.id : Date.now(),
        name: 'name',
        email: 'email',
        phone: 'phone',
        imageUrl: 'imageUrl'
      }

      this.model = morphism(schema, data)
    },
    open(data = {}) {
      this.setModel(data)
      this.visible = true
      if (data.id) {
        this.edit = true
      }
    },

    submit() {
      if (!this.submitEnable) {
        return false
      }

      if (!this.edit) {
        this.$emit('add', this.model)
        this.close()
        return
      }
      this.$emit('update', this.model)
      this.close()
    },

    close() {
      this.visible = false
      this.edit = false
    }
  }
}
</script>
