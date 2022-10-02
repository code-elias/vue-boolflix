<template>
  <div id="app">
    <section class="page-info visually-hidden">
      <h1>Replica of a Movie Sharing Website</h1>
      <p>By Elias Mahfuzul Golam</p>
      <p>Project for Boolean S.r.l.</p>
    </section>
    
    <HeaderComponent @search="setNewQuery" />
    <MainComponent :moviesData="moviesSearchResults" :tvShowsData="tvSearchResults" />
    <FooterComponent />
  </div>
</template>

<!-- SCRIPT -->
<script>
// Import Libraries
import axios from "axios";

// COMPONENTS
import HeaderComponent from './assets/structureComponents/HeaderComponent.vue';
import MainComponent from './assets/structureComponents/MainComponent.vue';
import FooterComponent from './assets/structureComponents/FooterComponent.vue';


export default {
    name: "App",

    data() {
      return {
        moviesSearchResults: [],
        tvSearchResults: [],

        // API
        TMDB_API: {
          api_key: process.env.VUE_APP_APIKEY,

          base_url: "https://api.themoviedb.org/3/",
          trending_movies: "trending/movie/week?",
          trending_tv: "trending/tv/week?",
          search_movie: "search/movie?",
          search_tv: "search/tv?",
          search_query: "&query=",
          
          language: "&language=it IT"
        }
      }
    },

    created() {
      this.setNewQuery(); // Initialize Default Loading
    },

    methods: {
      setNewQuery(query) {
        // Query new searches
        this.search(query, 'movie');
        this.search(query, 'tv');
      },

      search(query, type) {
        axios
          .get(this.getQuery(query, type))
          .then((response) => { this.processSearchData(response, type); })
          .catch(error => {
            console.warn("Error Found while searching Movies:", error);
        });
      },

      getQuery(query, queryType) {
        const {api_key, base_url, search_query, search_movie, search_tv, trending_movies, trending_tv} = this.TMDB_API;

        const trending = queryType === 'tv' ? trending_tv : trending_movies;
        const mediaToSearch = queryType === 'tv' ? search_tv : search_movie;

        return query ? 
          base_url + mediaToSearch + api_key + search_query + query.toLowerCase()
          : base_url + trending + api_key;
      },

      processSearchData({status, data}, type) {
        if (status !== 200) return; // Guard Statement

        if (type === 'tv') {
          this.tvSearchResults = data.results;
        }
        else if (type === 'movie') {
          this.moviesSearchResults = data.results;
        }

        return data.results;
        // Query Format:
        /* 
        data: 
        {
          "page": Number,
          "results": Array of Objects (movie),
          "total_pages": Number,
          "total_results": Number
        }
        */
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
@import '@/assets/stylesheets/style.scss'
</style>
