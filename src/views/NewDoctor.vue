<template>
    <div class="new-doctor">
        <div class="container">
            <main-title>Join Us</main-title>
            <div class="content">
                <image-item></image-item>
                <doctor-form></doctor-form>
            </div>
        </div>
    </div>
</template>

<script>
import DoctorForm from '../components/NewDoctor/DoctorForm.vue';
import ImageItem from '../components/NewDoctor/ImageItem.vue'

export default {
    components: {
        DoctorForm,
        ImageItem
    }
}
</script>

<style scoped>
.new-doctor {
    padding: var(--section-padding) 0;
}
.content {
    display: flex;
    gap: 20px;
}
@media (max-width: 620px) {
    .content {
        flex-direction: column;
    }
} 
</style>
