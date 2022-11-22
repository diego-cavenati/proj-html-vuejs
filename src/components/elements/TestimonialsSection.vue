<script>

export default {
    name: 'TestimonialsSection',
    data() {
        return {
            activeImage: 0,
            intervalId: null,
            slides: [
                {
                    image: 'h3-img-04.png',
                    title: 'Cynthia Clark',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque.',
                }, {
                    image: 'h3-img-07.png',
                    title: 'Jhon Doe',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque.',
                }, {
                    image: 'h3-img-08.png',
                    title: 'Emily Lorem',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque.',
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
            }, 3000)
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
    <div class="testimonialsSection">
        <div class="textBg">Testimonials.</div>
        <div class="elContainerFull">
            <div class="arrow">
                <div class="prev" @click="prevImage">
                    <img src="../../assets/svg/svg-6.svg" alt="">
                </div>
                <div class="next" @click="nextImage">
                    <img src="../../assets/svg/svg-6.svg" alt="">
                </div>
            </div>

            <div class="testimonialsItem">
                <div class="item" :class="activeImage === i ? 'visible' : ''" v-for="(element, i) in slides"
                    @mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
                    <img :src="getImageUrl(element.image)" alt="">
                    <div class="claim">
                        <h4>{{ element.title }}</h4>
                        <p>{{ element.text }}</p>
                    </div>
                    <!-- TODO aggiunta conta slider -->
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.testimonialsSection {
    height: 19.688rem;
    background-color: $el-dark-bg;
    position: relative;


    .textBg {
        font-family: $el-font-serif;
        font-size: 6rem;
        font-weight: 700;
        color: $el-darker-bg;
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

// slider
.item {
    // width: 100%;
    // position: relative;
    display: none;
    color: $el-lighter;
    text-align: center;

}

.item.visible {
    display: block;
}

.item img {
    width: 15%;
    border: 2px solid white;
    border-radius: 50%;
    margin-bottom: 0.7rem;
}

.testimonialsItem {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
}

.claim {
    text-align: center;

    h4 {
        margin-bottom: 0.7rem;

    }

    p {
        color: $el-lighter;
        max-width: 30rem;
    }
}

.elContainerMid,
.elContainerFull {
    position: relative;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 999;
}

.prev {
    transform: rotate(180deg);
    left: 0;
}

.next {
    right: 0;
}
</style>