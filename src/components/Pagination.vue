<template>
  <div class="container">
    <nav>
      <ul class="pagination justify-content-end">
        <li class="page-item" :class="{ disabled: prevPageToken === undefined }">
          <md-button @click.native="prevPage"
            type="button"
            class="md-raised md-accent"
            >
            <font-awesome-icon class="mr-1" :icon="['fas', 'arrow-left']" /> Previous
          </md-button>
        </li>
        <li class="page-item" :class="{ disabled: nextPageToken === undefined }">
          <md-button @click.native="nextPage"
            type="button"
            class="md-raised md-accent"
            >
            Next <font-awesome-icon class="mr-1" :icon="['fas', 'arrow-right']" />
          </md-button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['prevPageToken', 'nextPageToken'],
  methods: {
    prevPage () {
      // Emitovanje prev-page i next-page eventa parent komponenti
      this.$emit('prev-page')
    },
    nextPage () {
      this.$emit('next-page')
    }
  }
}
</script>

<style scoped>
.page-link {
  box-shadow: none !important;
}
</style>
