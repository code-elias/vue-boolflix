<template>
  <div id="app">
    <h1>Replica of a Movie Sharing Website</h1>
    <p>By Elias Mahfuzul Golam</p>
    <p>Project for Boolean S.r.l.</p>

    <HeaderComponent @search="setNewQuery"/>
    <MainComponent :moviesData="moviesSearchResults"/>
    <FooterComponent />
  </div>
</template>

<!-- SCRIPT -->
<script>
import axios from "axios";

import HeaderComponent from './assets/structureComponents/HeaderComponent.vue';
import MainComponent from './assets/structureComponents/MainComponent.vue';
import FooterComponent from './assets/structureComponents/FooterComponent.vue';

// Import Libraries
export default {
    name: "App",

    data() {
      return {
        moviesSearchResults: [],
        tvSeriesSearchResults: [],

        // API
        API_KEY: "api_key=6e12bf2de8d8ec96f13c4937cd273f69",

        TMDB_API: "https://api.themoviedb.org/3/",
        TRENDING: "trending/all/week?",
        SEARCH_MOVIE: "search/movie?",
        SEARCH_TV: "search/tv?",
        SEARCH_QUERY: "&query=",
        
        language: "&language=it IT"
      }
    },

    created() {
      this.setNewQuery();
    },

    methods: {
      setNewQuery(query) {
        axios
          .get(this.getQuery(query, this.SEARCH_MOVIE))
          .then(response => {
            console.log("TESTING - setNewQuery[APP] Movie: ", query);
            // console.log("TESTING Response:", response);
            this.moviesSearchResults = response.data.results;
            console.log("TESTING Response MOVIES:", this.moviesSearchResults);
          })
          .catch(error => {
            console.warn("Error Found:", error);
        });

        axios
          .get(this.getQuery(query, this.SEARCH_TV))
          .then(response => {
            console.log("TESTING - setNewQuery[APP] TV: ", query);
            // console.log("TESTING Response:", response);
            this.tvSeriesSearchResults = response.data.results;
            console.log("TESTING Response TV:", this.tvSeriesSearchResults);
          })
          .catch(error => {
            console.warn("Error Found:", error);
        });

      },

      getQuery(query, queryType) {
        return query ? 
          this.TMDB_API + queryType + this.API_KEY + this.SEARCH_QUERY + query.toLowerCase()
          : this.TMDB_API + this.TRENDING + this.API_KEY;
      }
    },

    components: { 
      HeaderComponent, 
      MainComponent, 
      FooterComponent 
    }
}
</script>


<!-- STYLES -->
<!-- GLOBAL STYLE -->
<style lang="scss">

</style>
