<template>
    <div class="features" id="features">
        <div class="container">
            <main-title>Benefits of Online Consultation</main-title>
            <div class="content">
                <div class="image">
                    <img src="../../assets/feature.jpg"/>
                </div>
                <div class="text">
                    <ul>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-right" class="icon"/>
                            Consult Top Doctors 24x7
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-right" class="icon"/>
                            Convenient, Easy & Safe
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-right" class="icon"/>
                            Personalized Objective Consultations
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-right" class="icon"/>
                            Same Care as Clinic Visit
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-circle-right" class="icon"/>
                            Free Follow-up
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.features {
    padding: var(--section-padding) 0;
    background-color: var(--section-background);
}
.content {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.image {
    max-width: 480px;
}
.image img {
    width: 100%;
}
ul {
    list-style: none;
}
li:not(:last-child) {
    margin-bottom: 20px;
}
li {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px dotted #bbb;
    font-size: 18px;
}
.icon {
    margin-right: 10px;
    color: #777;
}
</style>