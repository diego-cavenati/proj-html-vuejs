<script>
export default {
    name: 'ContactUs',
}
</script>

<template>
    <div class="contactUs">
        <div class="elContainerMid">
            <div class="row">
                <div class="col-6 map">
                    <img src="../../assets/img/h1-contact-rev-01.png" alt="">
                    <!-- TODO aggiungo pin -->
                </div>
                <div class="col-6 form">
                    <h3 class="primaryDot">Contact us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr>
                    <div class="row">
                        <div class="col-6">
                            <input type="text" placeholder="Your name">
                        </div>
                        <div class="col-6">
                            <input type="text" placeholder="Your email">
                        </div>
                        <div class="col">
                            <textarea name="message" rows="3" cols="60" placeholder="Write a message"></textarea>
                        </div>
                    </div>
                    <button class="buttonPrimary">
                        send
                        <img src="../../assets/svg/svg-6.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.contactUs {
    padding: 4.75rem 0 2.75rem 0;
}

p {
    padding-bottom: 1rem;
}

hr {
    margin-bottom: 0.5rem;
}

.map {
    display: flex;
    align-items: center;
    justify-content: center;
}

input,
textarea {
    margin: 0.5rem 0;
    padding: 0.6rem;
    font-size: 0.6rem;
    border: none;
    background: none;
    border-bottom: 1px solid $el-border-contrast;
    font-family: $el-font-sans;
    width: 100%;
}

button {
    margin-top: 0.5rem;
}
</style>