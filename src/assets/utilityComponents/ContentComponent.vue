<template>
  <section>
    <h2>{{ type }}</h2>

    <ul>
        <li v-for="item in contentArray" :key="item.id"
        >
            <p>{{ getTitle(item) }}</p>
            <p>{{ getVotes(item) }}</p>
            <div class="rating">
              <font-awesome-icon v-for="star in getStars(item).stars" :key="'Star' + star"
                :icon="['fas', 'star']"  
              />
              <font-awesome-icon v-for="halfStar in getStars(item).halfStars" :key="'Half' + halfStar"
                :icon="['far', 'star-half-stroke']" 
              />

              <font-awesome-icon v-for="empty in getStars(item).empty" :key="'Empty' + empty"
                :icon="['far', 'star']" 
              />
            </div>
            <img :src="getFlagSrc(item)" alt="">
            <img class="poster" :src="getPosterSrc(item)" alt="Poster">
        </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'ContentComponent',

  data() {
    return {
      TOTAL_STARS: 5,

      FLAG_API: {
        base_url: "https://countryflagsapi.com/",
        fileType: "png/",
      },

      TMDB_IMG_API: {
        base_url: "https://image.tmdb.org/t/p/",
        file_size: "w500/",
      }
    }
  },

  props: {
    type: String,

    contentArray: Array,
    // Data Format: Array of Objects (item)
    /*
    [
      {
        ...
        title: String,
        original_title: String,
        name: String,
        original_name: String,

        overview: String(description),

        backdrop_path: String(url),
        poster_path: String(url),

        vote_average: Number,
        vote_count:
      }
    ] 
    */
  },

  methods: {
    getTitle(media) {
      if(media.title) return media.title;
      if(media.original_title) return media.original_title;
      if(media.name) return media.name;
      if(media.original_name) return media.original_name;
    },

    getVotes({vote_average, vote_count}) {
      return `${vote_average} (${vote_count})`
    },

    getRating(media) {
      let num = parseFloat(media.vote_average) / (10 / this.TOTAL_STARS);
      let rating = parseInt(num % 10);
      
      num -= parseInt(num % 10);

      if(num <= 0.25) {
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

    getStars(media) {
      let stars = this.getRating(media);
      const halfStars = Number.isInteger(stars) ? 0 : 1;
      stars = parseInt(stars);

      console.log("Stars Full:", stars, "half:", halfStars);

      return {
        "stars": stars,
        "halfStars": halfStars,
        "empty": this.TOTAL_STARS - stars - halfStars,
      }
    },

    getPosterSrc(media){
      const {base_url, file_size} = this.TMDB_IMG_API;
      return base_url + file_size + media.poster_path;
    },

    getFlagSrc(media) {
      const {base_url, fileType} = this.FLAG_API;
      return base_url + fileType + this.flagID(media.original_language);
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


<!-- STYLES: SCSS -->
<style lang="scss" scoped>
img {
  width: 20px;
}

.poster {
  width: 200px;
}
</style>