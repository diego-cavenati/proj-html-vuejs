import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    activeImage: 0,
    intervalId: null,
    imgUrl: '',
    slides: null,

    // active index section
    jumboActiveImage: 0,
    teamActiveImage: 0,
    testimonialsActiveImage: 0,

    // active slides
    jumboSlides: null,
    teamSlides: null,
    testimonialsSlides: null,

    // intervall id
    jumboIntervalId: null,
    jumboIntervalId: null,
    jumboIntervalId: null,

    // template
    // prevImage() {
    //     this.activeImage--

    //     if (this.activeImage < 0) {
    //         this.activeImage = this.slides - 1;
    //     }
    // },
    // nextImage() {
    //     this.activeImage++

    //     if (this.activeImage === this.slides) {
    //         this.activeImage = 0;
    //     }
    // },
    // changeImage(index) {
    //     this.activeImage = index;
    // },
    // startAutoPlay() {
    //     this.intervalId = setInterval(() => {
    //         this.nextImage();
    //     }, 5000)
    // },
    // stopAutoPlay() {
    //     clearInterval(this.intervalId)
    // },
    getImageUrl(name) {
        this.imgUrl = new URL(`./assets/img/${name}`, import.meta.url).href;
        return this.imgUrl
    },

    //jumbo
    jumboPrevImage() {
        this.jumboActiveImage--

        if (this.jumboActiveImage < 0) {
            this.jumboActiveImage = this.jumboSlides - 1;
        }
    },
    jumboNextImage() {
        this.jumboActiveImage++

        if (this.jumboActiveImage === this.jumboSlides) {
            this.jumboActiveImage = 0;
        }
    },
    jumboChangeImage(index) {
        this.jumboActiveImage = index;
    },
    jumboStartAutoPlay() {
        this.jumboIntervalId = setInterval(() => {
            this.jumboNextImage();
        }, 5000)
    },
    jumboStopAutoPlay() {
        clearInterval(this.jumboIntervalId)
    },

    //team
    teamPrevImage() {
        this.teamActiveImage--

        if (this.teamActiveImage < 0) {
            this.teamActiveImage = this.teamSlides - 1;
        }
    },
    teamNextImage() {
        this.teamActiveImage++

        if (this.teamActiveImage === this.teamSlides) {
            this.teamActiveImage = 0;
        }
    },
    teamChangeImage(index) {
        this.teamActiveImage = index;
    },
    teamStartAutoPlay() {
        this.teamIntervalId = setInterval(() => {
            this.teamNextImage();
        }, 5000)
    },
    teamStopAutoPlay() {
        clearInterval(this.teamIntervalId)
    },

    //testimonials
    testimonialsPrevImage() {
        this.testimonialsActiveImage--

        if (this.testimonialsActiveImage < 0) {
            this.testimonialsActiveImage = this.testimonialsSlides - 1;
        }
    },
    testimonialsNextImage() {
        this.testimonialsActiveImage++

        if (this.testimonialsActiveImage === this.testimonialsSlides) {
            this.testimonialsActiveImage = 0;
        }
    },
    testimonialsChangeImage(index) {
        this.testimonialsActiveImage = index;
    },
    testimonialsStartAutoPlay() {
        this.testimonialsIntervalId = setInterval(() => {
            this.testimonialsNextImage();
        }, 5000)
    },
    testimonialsStopAutoPlay() {
        clearInterval(this.testimonialsIntervalId)
    },

})