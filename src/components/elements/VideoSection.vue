<script>
export default {
    name: 'VideoSection',
}
</script>

<template>
    <div class="videoSection">
        <font-awesome-icon class="play" icon="fa-solid fa-play" />
        <!-- <img src="../../assets/img/h1-img-04.jpg" alt="Video sui valori aziendali"> -->
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.videoSection {
    width: 100%;
    min-height: 30rem;
    position: relative;
    background-image: url('../../assets/img/h1-img-04.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    // img {
    //     max-height: 30rem;
    //     width: 100%;
    //     object-fit: cover;
    // }
    .play {
        color: $el-lighter;
        font-size: 1.5rem;
    }
}
</style>