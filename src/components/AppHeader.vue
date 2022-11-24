<script>
import NavBar from './elements/NavBar.vue';
import JumbotronSection from './elements/JumbotronSection.vue'

export default {
    name: 'AppHeader',
    components: {
        NavBar, JumbotronSection,
    },
}
</script>

<template>

    <!-- navbar -->
    <NavBar class="navBar" />

    <!-- jumbotron -->
    <JumbotronSection class="jumbotron" />

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.navBar {
    z-index: 999;
    position: relative;
}

.jumbotron {
    margin-top: -4.5rem;
}
</style>