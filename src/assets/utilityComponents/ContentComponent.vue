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
        return this.FLAG_API + this.API_FILETYPE + this.flagID(movie.original_language);
    }, 

    flagID(flag) {
        switch(flag) {
            case 'en': {
                return 'gb';
            }
            case 'ja': {
                return 'jp';
            }
            default: {
                return flag;
            }
        }
    }
  }
}
</script>

<style>

</style>