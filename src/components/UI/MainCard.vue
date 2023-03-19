<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    background-color: #fff;
    border-radius: var(--main-border-radius);
    padding: 15px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    width: fit-content;
    width: 100%;
}
</style>