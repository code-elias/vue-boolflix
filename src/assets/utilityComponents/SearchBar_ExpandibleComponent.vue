<template>
  <div>
    <input type="text" name="search-movie" id="search-movie"
        v-model="inputSearch"
        @keyup="search()"    
    >
  </div>
</template>


<!-- SCRIPT -->
<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      inputSearch: '',
      searchMovie: '',
    }
  },

  methods: {
    search() {
        // Guard Statement to avoid creating stream of searches on multiple enter presses
        // The trim() method allows to take into account pressing SpaceBar continuosly
        if (this.searchMovie.trim() === this.inputSearch.trim()) return;

        this.searchMovie = this.inputSearch.trim(); // Trim method added to keep the output streamlined
        console.log("DEBUG - Searching Text...", this.searchMovie);
        this.$emit('searchText', this.searchMovie); 
    }
  }
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>

</style>