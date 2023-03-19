<template>
    <div class="nav-bar">
        <a href="#">
            <font-awesome-icon icon="fa-solid fa-bars" class="icon"/>
        </a>
    </div>
</template>

<style scoped>
.nav-bar {
    display: none;
}
@media (max-width: 767px) {
    .nav-bar {
        display: block;
    }
}
.icon {
    color: #fff;
    font-size: 26px;
}
</style>