<template>
  <header class="flex-center container">
    <UserProfile class="user-profile" />
    <SearchBar @searchText="searching" />
  </header>
</template>


<!-- SCRIPT -->
<script>
import SearchBar from "@/assets/utilityComponents/SearchBar_ExpandibleComponent.vue";
import UserProfile from "@/assets/components/UserProfileComponent.vue";


export default {
    name: "HeaderComponent",

    data() {
      return {
        searchInvervalID: undefined,
        searchInputDelay: 400,
      }
    },

    methods: {
        searching(inputText) {
          clearInterval(this.searchInvervalID);
          
          this.searchInvervalID = setInterval(() => {
            this.$emit('search', inputText);
          }, this.searchInputDelay);
        }
    },
      
    components: {
    SearchBar,
    UserProfile
}
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
  
header {
  // FLEX CONTAINER
  justify-content: space-between;
}
</style>