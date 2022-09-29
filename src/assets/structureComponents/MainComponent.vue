<template>
  <main>
    <ContentComponent :movies="moviesToDisplay" />
  </main>
  
</template>


<!-- SCRIPT -->
<script>
// 
import ContentComponent from "../utilityComponents/ContentComponent.vue";

export default {
    name: "MainComponent",
    props: {
        moviesData: Array,
    },

    computed: {
      moviesToDisplay() {
        console.log("NEW SET OF MOVIES", this.moviesData);
        return this.moviesData;
      }
    },
    
    components: { 
      ContentComponent 
    }
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>

</style>