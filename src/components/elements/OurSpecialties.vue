<script>

export default {
    name: 'OurSpecialties',
    data() {
        return {
            strengths: [
                {
                    image: 'svg-0.svg',
                    title: 'Knowing',
                    text: 'Lorem ipsum dolor sit amet consectetur.',
                }, {
                    image: 'svg-1.svg',
                    title: 'Selling',
                    text: 'Lorem ipsum dolor sit amet consectetur.',
                }, {
                    image: 'svg-2.svg',
                    title: 'Learning',
                    text: 'Lorem ipsum dolor sit amet consectetur.',
                },
                {
                    image: 'svg-3.svg',
                    title: 'Contact',
                    text: 'Lorem ipsum dolor sit amet consectetur.',
                },
            ],
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../../assets/svg/${name}`, import.meta.url).href // !TODO sposto in store occhio a SVG
        }
    },
}
</script>

<template>
    <div class="ourSpecialties">
        <div class="elContainerMid">
            <div class="headingSpecialties">
                <h3 class="primaryDot">Our specialties</h3>
                <!--TODO rendere il punto dinamico arancione -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr>
            </div>
            <div class="strengths">
                <div class="row">
                    <div class="col" v-for="strength in strengths">
                        <img :src="getImageUrl(strength.image)" :alt="strength.title">
                        <h5>{{ strength.title }}</h5>
                        <p>{{ strength.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.ourSpecialties {
    padding: 4.375rem;
    background-color: $el-lighter;
    display: inline-block;
    margin: 0 auto;

    .headingSpecialties {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 2rem;

        hr {
            align-self: center;
            margin-top: 0.7rem;
        }

    }

}

.strengths {
    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 60%;
        padding: 0.7rem 0;
    }

    h5 {
        padding-bottom: 0.5rem;
    }
}

h3,
p,
h5 {
    text-align: center;
}
</style>