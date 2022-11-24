<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            links: [
                {
                    name: 'About me',
                    href: '#',
                },
                {
                    name: 'Aboutus',
                    href: '#',
                },
                {
                    name: 'Language packs',
                    href: '#',
                },
                {
                    name: 'Become a coach',
                    href: '#',
                },
                {
                    name: 'Montly events',
                    href: '#',
                },
            ]
        }
    }
}
</script>

<template>
    <footer>
        <div class="siteFooter">
            <div class="elContainerMid">
                <div class="row">
                    <div class="col">
                        <h5>About</h5>
                        <hr>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quos minima dolore similique
                            doloribus error magni expedita, eum vel ue.
                        </p>
                        <div class="social">
                            <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                            <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                            <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        </div>
                        <!-- TODO create component -->
                    </div>
                    <div class="col">
                        <h5>Twitter</h5>
                        <hr>
                        <div class="post">
                            <font-awesome-icon class="flatIcon" icon="fa-brands fa-twitter" />
                            <p>
                                @aliasadadm Hi @aliasdadm, can you please submit a ticket at https://t.co/JV6 and one of
                                our support agent
                            </p>
                        </div>
                        <div class="post">
                            <font-awesome-icon class="flatIcon" icon="fa-brands fa-twitter" />
                            <p>
                                @aliasadadm Hi @aliasdadm, can you please submit a ticket at https://t.co/JV6 and one of
                                our support agent
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <h5>Important links</h5>
                        <hr>
                        <div class="links">
                            <ul>
                                <li v-for="link in links"><a :href="link.href">{{ link.name }}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <h5>Contact me</h5>
                        <hr>
                        <div class="location">
                            <font-awesome-icon class="primaryColor" icon="fa-solid fa-location-dot" />
                            457 BigBlue Street, NY 10013
                        </div>
                        <div class="phone">
                            <font-awesome-icon class="primaryColor" icon="fa-solid fa-phone" />
                            (315) 5512-2579
                        </div>
                        <div class="email">
                            <font-awesome-icon class="primaryColor" icon="fa-solid fa-envelope" />
                            Everlead@mikado.com
                        </div>
                        <form action="#">
                            <input type="text" placeholder="Your Name">
                            <button class="buttonFormSubscribe">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyrightFooter">
            Copyright Everlead MikadoThemes
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.siteFooter {
    background-color: $el-darker-bg;
    padding: 3.75rem 0;
    color: $el-lighter;

    li {
        list-style: none;

        a {
            color: $el-text-middle-dark;
            font-size: 0.7rem;
            font-family: $el-font-sans;
        }
    }
}

.copyrightFooter {
    background-color: $el-primary;
    color: $el-lighter;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: 300;
}

h5 {
    color: $el-lighter;
    font-size: 1rem;

}

hr {
    margin: 0.7rem 0;
}

p {
    padding-bottom: 0.7rem;
}

.post {
    display: flex;
}

// social
.icon {
    color: $el-darker-bg;
    background-color: $el-lighter;
    border-radius: 50%;
    border: 0.2rem solid $el-lighter;
    aspect-ratio: 1/1;
    margin-right: 0.4rem;
    font-size: 0.6rem;
}

.flatIcon {
    color: $el-primary;
    padding-right: 0.5rem;
    font-size: 0.8rem;
}

// Contact me
.location,
.phone,
.email {
    font-size: 0.7rem;
    font-family: $el-font-sans;
    color: $el-text-middle-dark;
    padding: 0.2rem 0;
}

form {
    display: flex;
    padding-top: 1rem;
}

input {
    background: none;
    border: none;
    border-bottom: 1px solid $el-lighter;
    font-size: 0.7rem;
    padding: 0.5rem 0;
    width: 70%;
}

button {
    display: inline-block;
    border-bottom: 1px solid $el-lighter;
}
</style>