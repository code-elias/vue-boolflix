<template>
  <header>
    <SearchBar @searchText="searchMovie" />
  </header>
</template>


<!-- SCRIPT -->
<script>
import SearchBar from "@/assets/utilityComponents/SearchBar_ExpandibleComponent.vue";


export default {
    name: "HeaderComponent",

    data() {
        return {
            searchMovieInput: '',
        }
    },

    methods: {
        searchMovie(inputText) {
            this.searchMovieInput = inputText;
            console.log("TESTING - searchMovie[HEADER]:", this.searchMovieInput);
            this.$emit('search', this.searchMovieInput);
        }
    },
      
    components: { 
      SearchBar, 
    }
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>

</style>