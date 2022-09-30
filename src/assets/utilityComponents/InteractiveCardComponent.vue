<template>
  <article>
    <h3>{{ cardTitle }}</h3>
    <p>{{ cardVotes }}</p>

    <StarRatingComponent :rating="cardRating" :maxStars="TOTAL_STARS" /> 
    <LanguageFlagComponent :language="card.original_language" />

    <div class="posterContainer">
        <img class="poster" :src="posterSrc" alt="Poster" @error="imageNotFoundError($event)" />    
    </div>
  </article>
</template>


<script>
import StarRatingComponent from './StarRatingComponent.vue';
import LanguageFlagComponent from './LanguageFlagComponent.vue';

export default {
    name: "InteractiveCard",
    props: {
        card: Object,
        // Data Format(Card): Object
        /*{
          ...
          title: String,
          original_title: String,
          name: String,
          original_name: String,
  
          overview: String(description),
  
          backdrop_path: String(url),
          poster_path: String(url),
  
          vote_average: Number,
          vote_count: Number,

          original_language: String,
        }*/
    },

    data() {
        return {
            RATING_MAX: 10,
            TOTAL_STARS: 5,

            TMDB_IMG_API: {
                base_url: "https://image.tmdb.org/t/p/",
                file_size: "w500/",
            }
        };
    },
    
    // COMPUTED PROPERTIES
    computed: {
        cardTitle() {
            const { title, original_title, name, original_name } = this.card;
            const itemTitle = name || title || original_name || original_title;
   
            return itemTitle;
        },

        cardVotes() {
            const { vote_average, vote_count } = this.card;
            return `${vote_average} (${vote_count})`;
        },

        cardRating() {
            // Format the vote into the format we like based on TOTAL_STARS
            let num = this.card.vote_average / (this.RATING_MAX / this.TOTAL_STARS);

            let rating = parseInt(num); // We start by taking the integer part of num
            num -= parseInt(num);
            
            // We then round the decimal part
            if (num <= 0.25) {
                num = 0;
            }
            else if (num > 0.25 && num < 0.75) {
                num = 0.5;
            }
            else {
                num = 1;
            }

            rating += num;
            return rating;
        }, 

        posterSrc() {
            const { base_url, file_size } = this.TMDB_IMG_API;
            return base_url + file_size + this.card.poster_path;
        }
    },
    // END COMPUTED

    methods: {
        imageNotFoundError(event) {
            console.warn("Image not found: ", event);
        }
    },

    components: {
        StarRatingComponent,
        LanguageFlagComponent
    }
}
</script>



<style lang="scss" scoped>
.poster {
    width: 200px;
}
</style>