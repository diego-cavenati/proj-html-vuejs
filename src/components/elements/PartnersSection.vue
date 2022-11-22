<script>

export default {
    name: 'PartnersSection',
    data() {
        return {
            clients: [
                {
                    image: 'h4-clients-img-03.png',
                    alt: 'Logo AD',
                }, {
                    image: 'h4-clients-img-05.png',
                    alt: 'Logo M',
                }, {
                    image: 'h4-clients-img-07.png',
                    alt: 'Logo BB',
                }, {
                    image: 'h4-clients-img-09.png',
                    alt: 'Logo AA',
                }, {
                    image: 'h4-clients-img-01.png',
                    alt: 'Logo RKO',
                },
            ],
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../../assets/img/${name}`, import.meta.url).href // !TODO sposto in store 
        }
    }
}
</script>

<template>
    <div class="partersSection">
        <div class="elContainerMid">
            <div class="row">
                <div class="col" v-for="client in clients">
                    <img :src="getImageUrl(client.image)" :alt="client.alt">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.partersSection {
    padding: 2.75rem 0 4.75rem 0;
}

img {
    width: 60%;

    &:hover {
        filter: invert(36%) sepia(28%) saturate(7227%) hue-rotate(353deg) brightness(103%) contrast(101%); // !TODO aggiungo transizione 
    }
}
</style>