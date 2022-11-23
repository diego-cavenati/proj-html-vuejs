<script>
import JumbotronButton from './JumbotronButton.vue';

export default {
    name: 'JumbotronSection',
    components: {
        JumbotronButton,
    },
    data() {
        return {
            activeImage: 0,
            intervalId: null,
            slides: [
                {
                    image: 'rev-slider-main-home-img-01.jpg',
                    title: 'Our Team',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque odit dolorem aperiam vero! Doloribus minus aut at delectus ea et aliquid aperiam eos ipsa!',
                }, {
                    image: 'rev-slider-main-home-img-02.png',
                    title: 'Lorem',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque odit dolorem aperiam vero! Doloribus minus aut at delectus ea et aliquid aperiam eos ipsa!',
                }, {
                    image: 'rev-slider-main-home-img-03.jpg',
                    title: 'Lorem ipsum',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque odit dolorem aperiam vero! Doloribus minus aut at delectus ea et aliquid aperiam eos ipsa!',
                },
            ],
        }
    },
    methods: {
        prevImage() {
            this.activeImage--
            if (this.activeImage < 0) {
                this.activeImage = this.slides.length - 1;
            }
        },
        nextImage() {
            this.activeImage++

            if (this.activeImage === this.slides.length) {
                this.activeImage = 0;
            }
        },
        changeImage(index) {
            this.activeImage = index;
        },
        startAutoPlay() {
            this.intervalId = setInterval(() => {
                this.nextImage();
            }, 5000)
        },
        stopAutoPlay() {
            clearInterval(this.intervalId)
        },
        getImageUrl(name) {
            return new URL(`../../assets/img/${name}`, import.meta.url).href
        }
    },
}
</script>

<template>
    <div class="jumbotron">
        <div class="slider-wrapper" tabindex="0">

            <div class="elContainerFull">
                <div class="prev" @click="prevImage">
                    <img src="../../assets/svg/svg-6.svg" alt="">
                </div>
                <div class="next" @click="nextImage">
                    <img src="../../assets/svg/svg-6.svg" alt="">
                </div>
            </div>

            <div class="item" :class="activeImage === i ? 'visible' : ''" v-for="(element, i) in slides"
                @mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">

                <img class="imgJumbotron" :src="getImageUrl(element.image)" alt="">

                <div class="elContainerMid">
                    <div class="col-6 claim">
                        <h2 class="primaryDot">{{ element.title }}</h2>
                        <p>{{ element.text }}</p>

                        <JumbotronButton />

                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;


.item {
    width: 100%;
    position: relative;
    display: none;
}

.item.visible {
    display: block;
}

.item img {
    max-height: 469px;
    width: 100%;
    object-fit: cover;
}

.item .claim {
    position: absolute;
    left: 0;
    bottom: 50px;
    text-align: left;
}

.elContainerMid,
.elContainerFull {
    position: relative;
}

.prev,
.next {
    position: absolute;
    top: 234.5px;
    cursor: pointer;
    z-index: 999;

    img {
        filter: invert(100%);
    }
}

.prev {
    transform: rotate(180deg);
    left: 0;
}

.next {
    right: 0;
}
</style>