<template>
  <v-form @submit.prevent="executeSearch">
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            v-model="search"
            append-outer-icon="mdi-magnify"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Search"
            type="text"
            @click:append-outer="executeSearch"
            @click:clear="clearSearch"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    search: ''
  }),
  methods: {
    clearSearch() {
      this.search = '';
    },
    executeSearch() {
      this.$emit('search', this.search);
    }
  }
}
</script>

<style>

</style>
