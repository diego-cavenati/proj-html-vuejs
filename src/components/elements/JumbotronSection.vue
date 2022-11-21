<script>
export default {
    name: 'JumbotronSection',
    data() {
        return {
            activeImage: 0,
            intervalId: null,
            slides: [
                {
                    image: '../../assets/img/rev-slider-main-home-img-01.jpg',
                    title: 'Our Team.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque odit dolorem aperiam vero! Doloribus minus aut at delectus ea et aliquid aperiam eos ipsa!',
                }, {
                    image: '../../assets/img/rev-slider-main-home-img-02.jpg',
                    title: 'Our Team.',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque odit dolorem aperiam vero! Doloribus minus aut at delectus ea et aliquid aperiam eos ipsa!',
                }, {
                    image: '../../assets/img/rev-slider-main-home-img-03.jpg',
                    title: 'Our Team.',
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

                <!-- <img :src="element.image" alt=""> -->
                <img src="../../assets/img/rev-slider-main-home-img-03.jpg" alt="">

                <div class="elContainerMid">
                    <div class="col-6 text">
                        <h3>{{ element.title }}</h3>
                        <p>{{ element.text }}</p>
                        <button>Read more</button>
                        <button>Purchase</button>

                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.square {

    img {
        max-height: 469px;
        width: 100%;
        object-fit: cover;
    }
}

.item {
    float: left;
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

.item .text {
    position: absolute;
    left: 0;
    bottom: 50px;
    text-align: left;
    color: $el-darker;
}

.elContainerMid,
.elContainerFull {
    position: relative;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}

.next {
    bottom: 0;
}
</style>