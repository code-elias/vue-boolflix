<template>
  <main>
    <ContentComponent :contentArray="moviesToDisplay" :type="'Movies'" />
    <ContentComponent :contentArray="seriesToDisplay" :type="'TV Series'" />
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
        tvSeriesData: Array,
    },

    computed: {
      moviesToDisplay() {
        console.log("NEW SET OF MOVIES", this.moviesData);
        return this.moviesData;
      },

      seriesToDisplay() {
        console.log("NEW SET OF Tv Series", this.tvSeriesData);
        return this.tvSeriesData;
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