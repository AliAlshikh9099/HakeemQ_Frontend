<template>
    <hero-section></hero-section>
    <doctors-list></doctors-list>
    <about-section></about-section>
    <features-section></features-section>
</template>

<script>
import AboutSection from '@/components/About/AboutSection.vue'
import FeaturesSection from '@/components/features/FeaturesSection.vue';
import HeroSection from '@/components/Hero/HeroSection.vue';
import DoctorsList from '@/components/Doctors/DoctorsList.vue';

export default {
    components: {
        AboutSection,
        FeaturesSection,
        HeroSection,
        DoctorsList
    }
}
</script>