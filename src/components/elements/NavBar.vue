<script>
export default {
    name: 'NavBar',
}
</script>

<template>
    <nav>
        <div class="elContainerFull">
            <div class="row">
                <div class="col">
                    <img class="logo" src="../../assets/img/logo-img-01.png" alt="">
                </div>
                <div class="col">
                    <ul class="navbar">
                        <li><a href="#">Homes</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Element</a></li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-bars" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

nav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-image: linear-gradient(to bottom, #ffffff, #ffffff00, );
}

img.logo {
    text-align: left;
    width: 20%;
}

ul.navbar {

    display: flex;
    font-size: 0.6rem;
    color: $el-darker;

    li {
        list-style: none;
        padding: 0 1.2rem;
        text-transform: uppercase;

        a {
            color: $el-darker;
            font-family: $el-font-sans;


            &:hover {
                color: $el-primary;
            }
        }

        &:hover {
            color: $el-primary;
        }
    }
}
</style>