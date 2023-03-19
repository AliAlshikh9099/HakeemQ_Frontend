<template>
    <div 
        ref="hero" 
        class="hero" 
        id="hero"
        :style="'background-image: url(' + require(`../../assets/hero-0${slideId}.jpg`) + ')'"
    >
        <div class="overlay"></div>
        <div class="container">
            <h1>{{ sliders[slideId].title }}</h1>
            <p>{{ sliders[slideId].description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slideId: 0,
            sliders: [
                { 
                    title: 'Completely Saftey',
                    description: 'With HakeemQ, get a medical consultation via a video call in a completely safe manner, using the latest technology' 
                },
                {
                    title: 'Expert doctors',
                    description: 'Get the best consultation from a highly experienced doctor at a minimal cost.'
                },
                {
                    title: 'Available any time',
                    description: 'Get consultation anytime you want, 24 hours a day',
                }
            ]
        }
    },
    mounted() {
        setInterval(() => {
            this.slideId++;
            if (this.slideId >= 3) {
                this.slideId = 0;
            }
        }, 5000);
    }
}
</script>

<style scoped>
.hero {
    min-height: calc(100vh - 5rem);
    background-size: cover;
    position: relative;
    transition: 0.3s;
}
.overlay {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    min-height: calc(100vh - 5rem);
    text-align: center;
}
h1 {
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-size: 3rem;
    transition: 0.3s;
}
p {
    color: #fff;
    position: relative;
    font-size: 18px;
    max-width: 30rem;
    line-height: 1.7;
    transition: 0.3s;
}
p a {
    text-decoration: none;
    color: var(--primary);
}
</style>