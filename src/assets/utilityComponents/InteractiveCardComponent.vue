<template>
  <article>
    <h3>{{ cardTitle }}</h3>
    <p>{{ cardVotes }}</p>

    <StarRatingComponent :rating="cardRating" :maxStars="TOTAL_STARS" /> 
  </article>
</template>


<script>
import StarRatingComponent from './StarRatingComponent.vue';
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
        }*/
    },

    data() {
        return {
            RATING_MAX: 10,
            TOTAL_STARS: 5,
        };
    },
    
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
        }
    },

    components: { 
        StarRatingComponent 
    }
}
</script>



<style lang="scss" scoped>

</style>