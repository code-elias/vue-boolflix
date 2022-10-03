<template>
  <div id="app">
    <section class="page-info visually-hidden">
      <h1>Replica of a Movie Sharing Website</h1>
      <p>By Elias Mahfuzul Golam</p>
      <p>Project for Boolean S.r.l.</p>
    </section>
    
    <HeaderComponent @search="setNewQuery" />
    <MainComponent :mediaData="activeQueries ? searchResults : explorePage" :activeQuery="activeQueries"/>
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
        explorePage: [],
        firstLoad: true,

        activeQueries: false,

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

    computed: {
      searchResults() {
        return [this.moviesSearchResults, this.tvSearchResults];
      }
    },

    created() {
      this.search('', 'movie', 'tv'); // Initialize Default Loading
    },

    methods: {
      setNewQuery(query) {
        this.activeQueries = this.isUserSearching(query) ? true : false;
        if (this.activeQueries === false) return;

        // Query new searches
        this.search(query, 'movie', 'tv');
      },

      search(query, ...arrayOfFormats) {
        arrayOfFormats.forEach(format => {
          axios
            .get(this.getQuery(query, format))
            .then((response) => { this.processSearchData(response, format); })
            .catch(error => {
              console.warn("Error Found while searching Movies:", error);
          });
        })
      },

      getQuery(query, queryType) {
        const {api_key, base_url, search_query, search_movie, search_tv, trending_movies, trending_tv} = this.TMDB_API;

        if(!this.isUserSearching(query)) {
          const trending = queryType === 'tv' ? trending_tv : trending_movies;
          return base_url + trending + api_key;
        }
        
        const mediaToSearch = queryType === 'tv' ? search_tv : search_movie;
        return base_url + mediaToSearch + api_key + search_query + query.toLowerCase();
      },

      processSearchData({status, data}, type) {
        if (status !== 200) return; // Guard Statement
        if (type === 'tv') {
          this.tvSearchResults = data.results;
        }
        else if (type === 'movie') {
          this.moviesSearchResults = data.results;
        }

        if (this.firstLoad) {
          this.explorePage.push(data.results);
          console.log("DEBUG - explore page initialized", this.explorePage);
          if(this.explorePage.length === 2) {
            this.firstLoad = false;
          }
        }
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
      },

      isUserSearching(query) {  
        if (query === undefined || query.trim() === '') {
          return false;
        } else {
          return true;
        }
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
@import '@/assets/stylesheets/style.scss';

</style>
