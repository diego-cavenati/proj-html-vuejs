<script>
export default {
    name: 'JumbotronButton',
}
</script>

<template>
    <div class="jumbotronButton">
        <button class="buttonSecondary">
            Read more
            <div class="line"></div>
            <img class="arrowButton" src="../../assets/svg/svg-6.svg" alt="arrow">
        </button>
        <button class="buttonPrimary">
            Purchase
            <div class="line"></div>
            <img class="arrowButton" src="../../assets/svg/svg-6.svg" alt="arrow">
        </button>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.jumbotronButton {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 4rem;
}

.buttonPrimary {
    background-color: $el-primary;
    color: $el-lighter;
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;


    img {
        width: 20%;
    }

    .line {
        background-color: $el-lighter;
    }
}

.buttonSecondary {
    background-color: $el-lighter;
    color: $el-darker;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.7rem;

    img {
        filter: invert(100%);
        width: 20%;
    }

    .line {
        background-color: $el-darker;
    }
}

.line {
    width: 1px;
    height: 30px;
    background-color: $el-darker;
    margin-right: 0.5rem;
    margin-left: 1rem;
}
</style>