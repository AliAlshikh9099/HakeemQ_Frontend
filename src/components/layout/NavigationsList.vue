<template>
    <ul>
        <li>
            <a href="#">About Us</a>
        </li>
        <li>
            <a href="#">Doctors List</a>
        </li>
        <li>
            <router-link to="/register">Register</router-link>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    display: flex;
    height: 100%;
    align-items: center;
}
@media (max-width: 767px) {
    ul {
        display: none;
    }
}
a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    height: 5rem;
    transition: 0.3s;
    padding: 0 30px;
    display: flex;
    align-items: center;
    position: relative;
}
a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background-color: var(--primary);
    transition: 0.3s;
}
a:hover::before {
    width: 100%;
}
a:hover,
a:active {
    color: #53a876;
}
</style>