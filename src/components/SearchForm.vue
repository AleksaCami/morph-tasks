<template>
  <div class="container">
    <form class="mb-5">
      <div class="input-group">
        <input
          v-model="searchString"
          @keydown.13.prevent="parseSearchString"
          type="text"
          class="form-control"
          placeholder="Search..."
        >
        <div class="input-group-append">
          <button @click="parseSearchString" class="btn btn-outline-primary" type="button">
            <font-awesome-icon class="mr-1" :icon="['fas', 'search']" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    parseSearchString () {
      const trimmedSearchString = this.searchString.trim()
      if (trimmedSearchString !== '') {
        const searchParams = trimmedSearchString.split(/\s+/)
        this.$emit('search', searchParams)
      }
    }
  }
}
</script>

<style scoped>
input,
button {
  box-shadow: none !important;
}

.form-control {
  border-color: #6c757d;
}
</style>
