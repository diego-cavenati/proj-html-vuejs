import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    activeImage: 0,
    intervalId: null,
    imgUrl: '',
    slides: null,
    prevImage() {
        this.activeImage--
        if (this.activeImage < 0) {
            this.activeImage = this.slides - 1;
        }
    },
    nextImage() {
        this.activeImage++

        if (this.activeImage === this.slides) {
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
        this.imgUrl = new URL(`./assets/img/${name}`, import.meta.url).href;
        return this.imgUrl
    }
})