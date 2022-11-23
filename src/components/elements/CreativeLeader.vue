<script>
import AppButton from './AppButton.vue';

export default {
    name: 'CreativeLeader',
    components: {
        AppButton,
    }
}
</script>

<template>
    <div class="creativeLeader">
        <div class="elContainerMid">
            <div class="row">
                <div class="col">
                    <h3>Creative Leader.</h3>
                    <!--TODO rendere il punto dinamico arancione -->
                    <hr>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat nulla magnam adipisci
                        minima, enim quam quibusdam incidunt placeat reiciendis non ea error odio. Pariatur amet harum
                        cum non magni.</p>
                    <AppButton buttonText="read more" />
                </div>
                <div class="col">
                    <div class="mentorship">
                        <h6>Mentorship</h6>
                        <span class="number">78%</span>
                        <div class="line">
                            <div class="orange"></div>
                            <div class="empty"></div>
                        </div>
                    </div>
                    <div class="education">
                        <h6>Education</h6>
                        <span class="number">95%</span>
                        <div class="line">
                            <div class="orange"></div>
                            <div class="empty"></div>
                        </div>
                    </div>
                    <div class="learning">
                        <h6>Learning</h6>
                        <span class="number">65%</span>
                        <div class="line">
                            <div class="orange"></div>
                            <div class="empty"></div>
                        </div>
                    </div>
                    <div class="motivation">
                        <h6>Motivation</h6>
                        <span class="number">83%</span>
                        <div class="line">
                            <div class="orange"></div>
                            <div class="empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.creativeLeader {
    padding: 6rem 0;

    h3 {
        font-size: 1.5rem;
    }
}


.col {
    h6 {
        font-size: 0.9rem;
        display: inline-block;
    }
}

.line {
    position: relative;
    padding-top: 0.5rem;
    margin-bottom: 0.9rem;

    .orange {
        background-color: $el-primary;
        height: 3px;
        z-index: 999;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .empty {
        background-color: $el-border-contrast;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 99;
        width: 100%;
    }
}

.number {
    float: right;
    font-size: 0.9rem;
}

.mentorship {
    .orange {
        width: 78%;
    }
}

.education {
    .orange {
        width: 95%;
    }
}

.learning {
    .orange {
        width: 65%;
    }
}

.motivation {
    .orange {
        width: 83%;
    }
}
</style>