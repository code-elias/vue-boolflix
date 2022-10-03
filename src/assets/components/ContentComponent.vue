<template>
  <!-- Card Container -->
  <ul class="card-container flex-center scroll-snap" :class="cardDisplayStyle">
      <InteractiveCard v-for="item in contentArray" :key="item.id"
        :card="item" 
        class="card-item"
      />
  </ul>
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
  // FLEX container
  $r-gap: $_size-5;
  $c-gap: $_size-3;

  row-gap: $r-gap;
  column-gap: $c-gap;
  align-items: flex-start;

  &.searchPage {
    // FLEX container 
    flex-wrap: wrap;

    // FLEX items
    @mixin calcCardsPerRow($cardsPerRow) {
      width: calc(100% / $cardsPerRow - $c-gap);
    }

    .card-item {
      @include calcCardsPerRow(2);

      @media only screen and (min-width: $sm-breakpoint) {
        @include calcCardsPerRow(3);
      }

      @media only screen and (min-width: $md-breakpoint) {
        @include calcCardsPerRow(4);
      }

      @media only screen and (min-width: $lg-breakpoint) {
        @include calcCardsPerRow(6);
      }
    }
  }

  &.explorePage {
    overflow-x: scroll;
    
    // FLEX items
    @mixin calcCardsInWindow($visibleCards) {
      min-inline-size: calc((100% / $visibleCards - $c-gap) + (100px / $visibleCards)) ;
    }
    .card-item {
      @include calcCardsInWindow(3);

      @media only screen and (min-width: $sm-breakpoint) {
        @include calcCardsInWindow(4);
      }

      @media only screen and (min-width: $md-breakpoint) {
        @include calcCardsInWindow(5);
      }

      @media only screen and (min-width: $lg-breakpoint) {
        @include calcCardsInWindow(6);
      }

      @media only screen and (min-width: $xl-breakpoint) {
        @include calcCardsInWindow(8);
      }
    }
  }
}



</style>
