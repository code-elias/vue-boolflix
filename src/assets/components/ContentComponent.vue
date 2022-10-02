<template>
  <section>
    <!-- Card Container -->
    <ul class="card-container wide-container flex-center scroll-snap">
        <!-- Turn each of these into a Card -->
        <li v-for="item in contentArray" :key="item.id" class="card-item"
        >
          <InteractiveCard  :card="item" />
        </li>
    </ul>
  </section>
</template>

<script>
import InteractiveCard from '@/assets/utilityComponents/InteractiveCardComponent.vue';

export default {
    name: "ContentComponent",
    data() {
      return {
        RATING_MAX: 10,
        TOTAL_STARS: 5,
        FLAG_API: {
          base_url: "https://countryflagsapi.com/",
          fileType: "png/",
        },
        TMDB_IMG_API: {
          base_url: "https://image.tmdb.org/t/p/",
          file_size: "w500/",
        }
      };
    },
    props: {
        type: String,
        contentArray: Array,
        // Data Format: Array of Objects (item)
    },

    components: { 
      InteractiveCard,
    }
}
</script>


<!-- STYLES: SCSS -->
<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

 
.card-container {
  overflow-x: scroll;

  .card-item {
    min-inline-size: 45%;

    @media only screen and (min-width: $sm-breakpoint) {
      min-inline-size: 38%;
    }

    @media only screen and (min-width: $md-breakpoint) {
      min-inline-size: 23%;
    }

    @media only screen and (min-width: $lg-breakpoint) {
      min-inline-size: 13%;
    }

    @media only screen and (min-width: $xl-breakpoint) {
      min-inline-size: 7%;
    }
  }
}
</style>