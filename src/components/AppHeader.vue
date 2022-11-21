<script>
import NavBar from './elements/NavBar.vue';
import JumbotronSection from './elements/JumbotronSection.vue'

export default {
    name: 'AppHeader',
    components: {
        NavBar, JumbotronSection
    },
}
</script>

<template>

    <!-- navbar -->
    <NavBar />

    <!-- jumbotron -->
    <JumbotronSection />

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>