<template>
  <section>
    <h2>Movies!</h2>

    <ul>
        <li v-for="movie in movies" :key="movie.id"
        >
            <p>{{ getTitle(movie) }}</p>
            <p>{{ getVotes(movie) }}</p>
            <img :src="getFlagSrc(movie)" alt="">
        </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContentComponent',

  data() {
    return {
        FLAG_API: "https://countryflagsapi.com/",
        API_FILETYPE: "png/",
    }
  },

  props: {
    movies: Array,
  },

  methods: {
    getTitle(movie) {
        if(movie.title) return movie.title;
        if(movie.original_title) return movie.original_title;
        if(movie.name) return movie.name;
        if(movie.original_name) return movie.original_name;
    },

    getVotes({vote_average, vote_count}) {
        return `${vote_average} (${vote_count})`
    },

    getFlagSrc(movie) {
        console.log("Searching Flag", this.FLAG_API + this.API_FILETYPE + movie.original_language);
        axios
            .get(this.FLAG_API + this.API_FILETYPE + movie.original_language)
            .then(response => {
                console.log("FLAG", response);
            })
            .catch(error => {
                console.warn(error);
        });
    }
  }
}
</script>

<style>

</style>