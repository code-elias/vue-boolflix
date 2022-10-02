<template>
  <section>
    <!-- Card Container -->
    <ul class="card-container flex-center" :class="cardDisplayStyle">
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
        },
      };
    },
    props: {
        searchPage: Boolean,

        type: String,
        contentArray: Array,
        // Data Format: Array of Objects (item)
    },

    computed: {
      cardDisplayStyle() {
        if(this.searchPage === true) {
          return ['searchPage', 'container'];
        } else {
          return ['explorePage', 'wide-container', 'scroll-snap'];
        }
      }
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
  $gap: $_size-1;
  gap: $gap;

  &.searchPage {
    justify-content: space-around;
    flex-wrap: wrap;

    .card-item {
      width: calc(100% / 2 - $gap);

      @media only screen and (min-width: $sm-breakpoint) {
        width: calc(100% / 3 - $gap);
      }
      
      @media only screen and (min-width: $md-breakpoint) {
        width: calc(100% / 4 - $gap);
      }
    }
  }


  &.explorePage {
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
        min-inline-size: 11%;
      }
    }
  }
}
</style>