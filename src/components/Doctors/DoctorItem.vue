<template>
    <div class="doctor-item">
        <main-card>
            <div class="card-content">
                <img src="../../assets/Doctor-icon.jpg"/>
                <h2>Dr.{{ name }}</h2>
                <p>{{ email }}</p>
                <h4>{{ spz }}</h4>
                <button @click="$emit('book')">Book</button>
            </div>
        </main-card>
    </div>
</template>

<script>
export default {
    props: ['name', 'spz', 'email'],
    emits: ['book']
}
</script>

<style scoped>
.doctor-item {
    transition: 0.3s;
}
.doctor-item:hover {
    transform: translateY(-10px);
}
.card-content {
    text-align: center;
}
img {
    max-width: 240px;
    margin-bottom: 10px;
}
h2 {
    font-size: 26px;
}
h4 {
    color: #777;
    font-size: 18px;
    margin: 10px 0;
}
p {
    color: #000;
    line-height: 1.6;
}
button {
    background-color: var(--primary);
    padding: 10px 20px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: 0.3s;
}
button:hover {
    background-color: var(--primary-alt);
}
</style>