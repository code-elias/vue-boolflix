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

    methods: {
        searching(inputText) {
            this.$emit('search', inputText);
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