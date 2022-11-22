<script>
import OurSpecialties from '../components/elements/OurSpecialties.vue';
import TeamWork from '../components/elements/TeamWork.vue';
import UpcomingEvents from '../components/elements/UpcomingEvents.vue';
import CreativeLeader from '../components/elements/CreativeLeader.vue';
import LatestNews from '../components/elements/LatestNews.vue';
import TestimonialsSection from '../components/elements/TestimonialsSection.vue';
import VideoSection from '../components/elements/VideoSection.vue';
import ContactUs from '../components/elements/ContactUs.vue';
import PartnersSection from '../components/elements/PartnersSection.vue';

export default {
    name: 'AppMain',
    components: {
        OurSpecialties,
        TeamWork,
        UpcomingEvents,
        CreativeLeader,
        LatestNews,
        TestimonialsSection,
        VideoSection,
        ContactUs,
        PartnersSection,
    },
}
</script>

<template>
    <main>
        <!--ok -->
        <OurSpecialties class="ourSpecialties" />
        <TeamWork />
        <UpcomingEvents />
        <CreativeLeader />
        <LatestNews />
        <TestimonialsSection />
        <!--ok -->
        <VideoSection />
        <!--ok -->
        <ContactUs />
        <!--ok -->
        <PartnersSection />
    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
}

.ourSpecialties {
    margin-top: -2.5rem;
    z-index: 99999;
}
</style>