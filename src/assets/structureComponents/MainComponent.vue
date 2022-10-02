<template>
  <main class="wide-container">
    <nav>
      <ul class="media-nav flex-center">
        <li v-for="(format,index) in mediaFormats" :key="format"
          @click="switchMediaFormat(index)"
          class="nav-item"  
        >
          <h2>{{ format }}</h2>
        </li>
      </ul>
    </nav>

    <div v-for="(media, index) in mediaToDisplay" :key="media.format" 
      v-show="index === activeCategoryIdx"
      class="content-container"
    >
      <ContentComponent 
        :contentArray="media.data"
        :format="media.format"
        :searchPage="activeQuery"
      />
    </div>
  </main>
  
</template>


<!-- SCRIPT -->
<script>
// COMPONENTS
import ContentComponent from "@/assets/components/ContentComponent.vue";

import Media from "@/myClasses.js";


export default {
    name: "MainComponent",
    props: {
        moviesData: Array,
        tvShowsData: Array,

        activeQuery: Boolean,
    },

    data() {
      return {
        activeCategoryIdx: 0,

        mediaFormats: [],
      }
    },

    // COMPUTED PROPERTIES
    computed: {
      mediaToDisplay() {
        const mediaArr = [];
        mediaArr.push(new Media("Movies", this.moviesData));
        mediaArr.push(new Media("TV Series", this.tvShowsData));
        mediaArr.push(new Media("Favourites"));
        mediaArr.push(new Media("Discover"));

        return mediaArr;
      },
    },
    // end COMPUTED

    methods: {
      setMediaFormats() {
        this.mediaToDisplay.forEach(media => {
          this.mediaFormats.push(media.format);
        });
      },

      switchMediaFormat(index) {
        this.activeCategoryIdx = index;
      }
    },

    created() {
      this.setMediaFormats();
    },
    
    components: { 
      ContentComponent 
    }
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>
.media-nav {
  justify-content: center;
}
</style>