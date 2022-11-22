<script>

export default {
    name: 'UpcomingEvents',
}
</script>

<template>
    <div class="upcomingEvents">
        <div class="elContainerMid">
            <div class="row">
                <div class="col-5">
                    <div class="events">
                        <div class="headerEvents">
                            <h3>Upcoming Events</h3>
                        </div>
                        <div class="event">
                            <div class="dateEvent">
                                07
                                <span>Jan 2022</span>
                            </div>
                            <div class="infoEvent">
                                <h5>Melbourne Coaching</h5>
                                <div class="when">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-clock" />
                                    9:00 am - 5:00 pm, Jan 7,2022
                                </div>
                                <div class="where">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-location-dot" />
                                    Cambridge, MA 02138, USA
                                </div>
                                <a href="#">read more</a>
                            </div>
                        </div>
                        <div class="event">
                            <div class="dateEvent">
                                11
                                <span>Jan 2022</span>
                            </div>
                            <div class="infoEvent">
                                <h5>New York Coaching</h5>
                                <div class="when">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-clock" />
                                    9:00 am - 5:00 pm, Jan 7,2022
                                </div>
                                <div class="where">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-location-dot" />
                                    Cambridge, MA 02138, USA
                                </div>
                                <a href="#">read more</a>
                            </div>
                        </div>
                        <div class="event">
                            <div class="dateEvent">
                                21
                                <span>Jan 2022</span>
                            </div>
                            <div class="infoEvent">
                                <h5>London Coaching</h5>
                                <div class="when">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-clock" />
                                    9:00 am - 5:00 pm, Jan 7,2022
                                </div>
                                <div class="where">
                                    <font-awesome-icon class="primaryColor" icon="fa-solid fa-location-dot" />
                                    Cambridge, MA 02138, USA
                                </div>
                                <a href="#">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as *;

.upcomingEvents {
    padding: 6.25rem 0;
    background-image: url('../../assets/img/h1-img-09.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.events {
    background-color: $el-light;

    .headerEvents {
        box-shadow: 0 5px 6px #dedede87;
        z-index: 999;
    }

    h3 {
        font-size: 1rem;
        padding: 1rem;

    }

    .event {
        display: flex;
        align-items: start;
        padding: 1rem;

        &:hover {
            background-color: $el-lighter;
        }

        .dateEvent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: $el-primary;
            padding: 0.3rem;
            color: $el-lighter;

            span {
                font-size: 0.65rem;
                text-transform: uppercase;
                font-weight: 300;
            }
        }

        .infoEvent {
            padding-left: 0.8rem;

            .when,
            .where {
                font-size: 0.7rem;
                padding: 0.2rem 0;
                color: $el-text-middle-dark;
            }
        }
    }
}

a {
    text-transform: uppercase;
    color: $el-darker;
    font-family: $el-font-sans;
    font-size: 0.7rem;
    font-weight: 500;
}
</style>