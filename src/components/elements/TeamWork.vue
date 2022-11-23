<script>

export default {
    name: 'TeamWork',
    data() {
        return {
            activeImage: 0,
            intervalId: null,
            slides: [
                {
                    image: 'h1-img-01.jpg',
                    name: 'Jason Brickford',
                    role: 'Founder and Executive Director',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque.',
                }, {
                    image: 'h1-img-02.jpg',
                    name: 'Jhon Doe',
                    role: 'Founder and Executive Director',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro, iste dicta delectus eum cumque.',
                }, {
                    image: 'h1-img-03.jpg',
                    name: 'Emily Lorem',
                    role: 'Founder and Executive Director',
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
    <div class="teamWork">
        <div class="elContainerMid">
            <img class="elementBg" src="../../assets/svg/svg-4.svg" alt="">
            <div class="item" :class="activeImage === i ? 'visible' : ''" v-for="(element, i) in slides">
                <div class="imageSlider">
                    <img :src="getImageUrl(element.image)" alt="">
                    <div class="arrow">
                        <div class="prev" @click="prevImage">
                            <img src="../../assets/svg/svg-6.svg" alt="">
                        </div>
                        <div class="next" @click="nextImage">
                            <img src="../../assets/svg/svg-6.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="personSlider">
                    <div class="claim">
                        <h4>{{ element.name }}</h4>
                        <span class="role">{{ element.role }}</span>
                        <hr>
                        <p>{{ element.text }}</p>
                        <div class="social">
                            <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                            <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                            <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        </div>
                        <span class="sign">{{ element.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.personSlider {
    background-color: $el-lighter;
    padding: 3.125rem;
}

.teamWork {
    padding: 4.375rem 0;
    position: relative;
}

.item {
    display: none;
    position: relative;
}

.item.visible {
    display: block;
}

.imageSlider {
    position: relative;
    width: 55%;
}

.personSlider {
    position: absolute;
    top: 50%;
    right: 0;
    width: 55%;
    transform: translate(0, -50%);
}

// Arrow
.arrow {
    background-color: $el-primary;
    width: 60px;
    display: flex;
    padding: 0.7rem;
    position: absolute;
    bottom: 4px;
    left: 0;
}

.prev,
.next {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        align-self: center;
    }
}

.next {
    img {
        padding-top: 0.1758rem;
    }
}

.prev {
    transform: rotate(180deg);
}

// Person details
h4 {
    font-size: 1.4rem;
}

hr {
    margin: 0.5rem 0;
}

p {
    padding-bottom: 0.5rem;
}

.role {
    font-family: $el-font-sans;
    font-size: 0.7rem;
}

.sign {
    font-family: $el-font-sign;
    color: $el-primary;
    position: absolute;
    right: 50px;
    bottom: 50px;
}

// social
.icon {
    color: $el-lighter;
    background-color: $el-primary;
    border-radius: 50%;
    border: 0.2rem solid $el-primary;
    aspect-ratio: 1/1;
    margin-right: 0.4rem;
    font-size: 0.6rem;
}

// element bg
.elementBg {
    position: absolute;
    top: 1rem;
    right: 0;
    width: 25%;
}
</style>