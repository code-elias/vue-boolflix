<template>
  <div>
    <font-awesome-icon v-for="star in starRating.stars" :key="'Star' + star"
        :icon="['fas', 'star']"  
    />
    <font-awesome-icon v-for="halfStar in starRating.halfStars" :key="'Half' + halfStar"
        :icon="['far', 'star-half-stroke']" 
    />
    <font-awesome-icon v-for="empty in starRating.empty" :key="'Empty' + empty"
        :icon="['far', 'star']" 
    />
  </div>
</template>

<script>
export default {
    name: 'StarRating',
    props: {
        rating: Number,
        maxStars: Number,
    },

    computed: {
        starRating() {
            const stars = parseInt(this.rating);
            const halfStars = Number.isInteger(this.rating) ? 0 : 1;

            return {
                "stars": stars,
                "halfStars": halfStars,
                "empty": this.maxStars - stars - halfStars,
            }
        }
    },
}
</script>

<style>

</style>