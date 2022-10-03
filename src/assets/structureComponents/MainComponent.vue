<template>
  <main class="wide-container">
    <NavBarComponent :navList="mediaFormats" @newNavLink="changeActiveCategory"/>

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
import NavBarComponent from "../utilityComponents/NavBarComponent.vue";

import Media from "@/myClasses.js";


export default {
    name: "MainComponent",
    props: {
        mediaData: Array,

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
        mediaArr.push(new Media("Movies", this.mediaData[0]));
        mediaArr.push(new Media("TV Series", this.mediaData[1]));
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
      
      changeActiveCategory(index) {
        this.activeCategoryIdx = index;
      }
    },

    created() {
      this.setMediaFormats();
    },
    
    components: {
      ContentComponent,
      NavBarComponent
    }
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>
.media-nav {
  justify-content: center;
}
</style>