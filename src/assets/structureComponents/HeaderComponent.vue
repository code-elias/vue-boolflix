<template>
  <header>
    <SearchBar @searchText="searching" />
  </header>
</template>


<!-- SCRIPT -->
<script>
import SearchBar from "@/assets/utilityComponents/SearchBar_ExpandibleComponent.vue";


export default {
    name: "HeaderComponent",

    methods: {
        searching(inputText) {
            this.$emit('search', inputText);
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