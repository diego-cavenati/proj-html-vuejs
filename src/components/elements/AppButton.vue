<script>
export default {
    name: 'AppButton',
    props: {
        buttonText: {
            type: String,
            default: () => 'Read more',
        }
    }
}
</script>

<template>
    <a href="#">
        {{ buttonText }}
    </a>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

a {
    text-transform: uppercase;
    color: $el-darker;
    font-family: $el-font-sans;
    font-size: 0.7rem;
    font-weight: 500;
}
</style>