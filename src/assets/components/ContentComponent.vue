<template>
  <section>
    <h2>{{ type }}</h2>

    <!-- Card Container -->
    <ul>
        <!-- Turn each of these into a Card -->
        <li v-for="item in contentArray" :key="item.id"
        >
          <InteractiveCard :card="item" />
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

</style>