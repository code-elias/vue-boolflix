<template>
  <main>
    <ContentComponent :contentArray="moviesToDisplay" :type="'Movies'" />
    <ContentComponent :contentArray="tvShowsToDisplay" :type="'TV Shows'" />
  </main>
  
</template>


<!-- SCRIPT -->
<script>
// 
import ContentComponent from "@/assets/components/ContentComponent.vue";

export default {
    name: "MainComponent",
    props: {
        moviesData: Array,
        tvShowsData: Array,
    },

    computed: {
      moviesToDisplay() {
        console.log("NEW SET OF MOVIES", this.moviesData);
        return this.moviesData;
      },

      tvShowsToDisplay() {
        console.log("NEW SET OF Tv Series", this.tvShowsData);
        return this.tvShowsData;
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