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
    <OurSpecialties />
    <TeamWork />
    <UpcomingEvents />
    <CreativeLeader />
    <LatestNews />
    <TestimonialsSection />
    <!--ok -->
    <VideoSection />
    <ContactUs />
    <!--ok -->
    <PartnersSection />

</template>

<style lang="scss" scoped>

</style>