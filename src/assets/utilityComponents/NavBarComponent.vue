<template>
  <nav>
    <ul class="flex-center container">
        <li v-for="(format,index) in navList" :key="format"
            @click="switchNavLink(index)"
            class="nav-item"  
        >
            <h2>{{ format }}</h2>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',

    props: {
        navList: Array,
    },

    methods: {
        switchNavLink(index) {
            this.$emit('newNavLink', index);
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    ul {
        // FLEX container
        justify-content: space-between;
    }
}
</style>