<script>
import AppButton from './AppButton.vue';

export default {
    name: 'LatestNews',
    components: {
        AppButton,
    },
    data() {
        return {
            activeImage: 0,
            intervalId: null,
            slides: [
                {
                    image: 'h1-blog-img-01.jpg',
                    date: 'May 5, 2019',
                    author: 'Amanda Cloe',
                    title: 'Next Investment',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta...',
                }, {
                    image: 'h1-blog-img-02.jpg',
                    date: 'May 5, 2019',
                    author: 'Amanda Cloe',
                    title: 'Team Building',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta...',
                }, {
                    image: 'h1-blog-img-03.jpg',
                    date: 'May 5, 2019',
                    author: 'Amanda Cloe',
                    title: 'New Business Day',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta...',
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
    <div class="latestNews">
        <div class="elContainerFull">
            <div class="elementBg">
                <img src="../../assets/svg/svg-4.svg" alt="">
            </div>
            <div class="headingNews">
                <h3>Latest news.</h3>
                <!--TODO rendere il punto dinamico arancione -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr>
            </div>
            <div class="arrow">
                <div class="prev" @click="prevImage">
                    <img src="../../assets/svg/svg-6.svg" alt="">
                </div>
                <div class="next" @click="nextImage">
                    <img src="../../assets/svg/svg-6.svg" alt="">
                </div>
            </div>

            <div class="elContainerMid">
                <div class="row">

                    <div class="col item visible" v-for="(element, i) in slides" @mouseenter="stopAutoPlay()"
                        @mouseleave="startAutoPlay()">

                        <img :src="getImageUrl(element.image)" alt="">
                        <div class="sticker">Lorem ipsum</div>
                        <div class="claim">
                            <span class="infoNews">
                                <span class="date">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-clock" />
                                    {{ element.date }}
                                </span>
                                <span class="author">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-user" />
                                    {{ element.author }}
                                </span>
                            </span>
                            <h4>{{ element.title }}</h4>
                            <p>{{ element.text }}</p>

                            <AppButton buttonText="read more" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.latestNews {
    padding: 4rem 0;
    background-color: $el-news-bg;
    position: relative;

    .headingNews {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        hr {
            align-self: center;
            margin-top: 0.7rem;
        }
    }
}

// slider
.item {
    position: relative;
    display: none;
    color: $el-darker;
}

.item.visible {
    display: block;
}

.item img {

    margin-bottom: 0.7rem;
}

.row {
    padding-top: 2rem;
}

.claim {
    text-align: left;

    h4 {
        margin-bottom: 0.3rem;
    }

    p {
        color: $el-darker;
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
    filter: invert(100%);
}

.prev {
    transform: rotate(180deg);
    left: 0;
}

.next {
    right: 0;
}

.sticker {
    background-color: $el-primary;
    color: $el-lighter;
    font-size: 0.6rem;
    text-transform: uppercase;
    font-family: $el-font-sans;
    font-weight: 300;
    position: absolute;
    top: 130px;
    right: 20px;
    padding: 0.2rem 0.7rem;
}

.infoNews {
    font-family: $el-font-sans;
    color: $el-text-middle-dark;
    font-size: 0.65rem;
    font-weight: 300;
}

.date {
    padding-right: 0.5rem;
}

.elementBg {
    position: absolute;
    top: -6.5rem;
    left: 0;

    img {
        width: 60%;
    }
}
</style>