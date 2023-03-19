<template>
    <div class="about" id="about">
        <div class="container">
            <main-title>About Us</main-title>
            <div class="content">
                <div class="image">
                    <img src="../../assets/hero-00.jpg" />
                </div>
                <div class="text">
                    <h1>What's HakeemQ ?</h1>
                    <p>
                        HakeemQ is a medical platform, 
                        it offer video consultation with best doctors 
                        without spent any time or effors for visit a 
                        doctor in clinic.
                        All specifications you find in HakeemQ.
                    </p>
                    <ul class="features">
                        <li>
                            <font-awesome-icon :icon="['fas', 'check']" class="icon"/>
                            Completely Saftey.
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'check']" class="icon"/>
                            We are here any time you need.
                        </li>
                        <li>
                            <font-awesome-icon :icon="['fas', 'check']" class="icon"/>
                            Very expert doctors.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {
    padding: var(--section-padding) 0;
}
.content {
    display: flex;
    align-items: center;
    gap: 40px;
}
.image {
    flex-basis: 45%;
}
img {
    width: 100%;
}
.text {
    flex-basis: 45%;
}
@media (max-width: 767px) {
    .content {
        flex-direction: column;
    }
    .image {
        flex-basis: 100%;
    }
    .text {
        flex-basis: 100%;
    }
}
.text h1 {
    color: var(--primary);
    font-size: 36px;
}
.text p {
    margin: 20px 0;
    color: #777;
    line-height: 1.6;
}
ul {
    list-style: none;
}
li {
    margin: 10px 0;
    display: flex;
    align-items: center;
}
.icon {
    color: var(--primary);
    margin-right: 5px;
}
</style>