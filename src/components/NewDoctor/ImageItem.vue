<template>
    <div class="image">
        <h1 class="logo">HakeemQ</h1>
    </div>
</template>

<script>

</script>

<style scoped>
.image {
    background-image: url('../../assets/new-doctor.png');
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30rem;
    flex-basis: 50%;
}
@media (max-width: 620px) {
    .image {
        flex-basis: 100%;
    }
}
.image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}
.logo {
    color: var(--primary);
    font-size: 44px;
    position: relative;
    z-index: 2;
}
</style>
