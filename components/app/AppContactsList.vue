<template>
  <div class="flex w-full py-4 space-x-4">
    <div class="flex flex-col w-4/12 space-y-4">

      <div v-if="contacts.length <= 0">
        Пусто...
      </div>

      <template v-for="(contact, idx) in contacts">
        <transition
          :key="idx"
          enter-active-class="transition-all duration-300 ease-out transform"
          leave-active-class="transition-all duration-300 ease-out transform"
          enter-class="-translate-x-8 opacity-0"
          leave-to-class="-translate-x-8 opacity-0"
        >
          <AppContactCard
            :key="idx"
            :item="contact"
            @preview="preview" />
        </transition>

      </template>
    </div>

    <div class="w-8/12">
      <AppContactPreview
        ref="preview"
        @delete="deleteItem"
        @edit="editItem" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.state.client.list
    }
  },

  // mounted() {
  //   console.log(this.contacts)
  // },

  methods: {
    deleteItem(item) {
      this.$store.commit('client/DELETE_CLIENT', item)
    },
    editItem(item) {
      this.$emit('edit', item)
    },
    preview(item) {
      this.$refs.preview.open(item)
    }
  }
}
</script>
