<template>
  <div class="app-container">
    <AppTopNav @open="$refs.modal.open()" />

    <AppModalUpsertForm
      ref="modal"
      @add="addContact"
      @update="updateItem" />

    <section>
      <AppContactsList @edit="editItem" />
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    addContact(item) {
      this.$store.commit('client/ADD_CLIENT', item)
    },
    editItem(item) {
      this.$refs.modal.open(item)
    },
    updateItem(item) {
      this.$store.commit('client/UPDATE_CLIENT', item)
    }
  }
}
</script>
