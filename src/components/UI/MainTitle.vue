<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<style scoped>
h1 {
    font-size: 3rem;
    text-align: left;
    position: relative;
    max-width: 100%;
    margin: 0 auto 40px 0;
}
h1::after {
    content: '';
    height: 4px;
    width: 120px;
    background-color: var(--primary);
    bottom: -10px;
    left: 0;
    position: absolute;
}
</style>