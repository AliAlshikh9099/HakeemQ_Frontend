<template>
    <header>
        <div class="container">
            <our-logo></our-logo>
            <div class="nav">
                <navigations-list></navigations-list>
            </div>
            <nav-bar></nav-bar>
        </div>
    </header>
</template>

<script>
import NavigationsList from './NavigationsList.vue';
import NavBar from './NavBar.vue';

export default {
    components: {
        NavigationsList,
        NavBar,
    }
}
</script>

<style scoped>
header {
    position: absolute;
    width: 100%;
    z-index: 99;
}
.container {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>