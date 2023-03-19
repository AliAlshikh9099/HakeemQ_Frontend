<template>
    <teleport to="body">
        <div v-if="isShown" class="overlay" @click="$emit('close')"></div>
            <transition name="modal">
                <div class="modal" v-if="isShown">
                    <main-card>
                        <slot></slot>
                    </main-card>
                </div>
            </transition>
    </teleport>
</template>

<script>
export default {
    emits: ['close'],
    props: ['isShown']
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
}
.modal {
    position: fixed;
    z-index: 101;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 60%;
    overflow-y: scroll;
}
.modal-enter-active {
    animation: enterMoving 0.4s ease-in;
}
.modal-leave-active {
    animation: leaveMoving 0.3s ease-out;
}
@keyframes enterMoving {
    0% {
        transform: translate(-50%, -100%);
    }
    100% {
        transform: translate(-50%, -50%);
    }
}
@keyframes leaveMoving {
    0% {
        transform: translate(-50%, -50%);
    }
    100% {
        transform: translate(-50%, -100%);
    }
}
</style>