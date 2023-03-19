<template>
    <div class="doctors">
        <div class="container">
            <main-title>Doctors</main-title>
            <div class="content">
                <doctor-item
                    v-for="(dr, index) in doctors"
                    :key="dr.id"
                    :name="dr.name"
                    :email="dr.email"
                    :spz="dr.spz"
                    @book="openBookingModal(index)"
                ></doctor-item>
            </div>
        </div>
        <main-modal
            @close="closeModal"
            :isShown="modalIsShowen"
            ><booking-form
                :name="drDetails.name"
                :spz="drDetails.spz"
                :id="idxDr"
            ></booking-form>
        </main-modal>
    </div>
</template>

<script>
import DoctorItem from './DoctorItem.vue';
import BookingForm from '../booking/BookingForm.vue';
import axios from 'axios';

export default {
    components: {
        DoctorItem,
        BookingForm
    },
    data () {
        return {
            // doctors: [
            //     {img: 'doctor-01.jpg', name: 'Ali Ahmed', specialization: 'Dentist', description: ''},
            //     {img: 'doctor-02.jpeg', name: 'Ismail Hasan', specialization: 'Orthopedist', description: ''},
            //     {img: 'doctor-03.jpeg', name: 'Hadi Faroq', specialization: 'Pediatrician', description: ''},
            //     {img: 'doctor-04.jpeg', name: 'Emad Elddin', specialization: 'Plastci', description: ''},
            //     {img: 'doctor-05.jpg', name: 'Qasem Haroun', specialization: 'Urologist', description: ''},
            //     {img: 'doctor-06.jpg', name: 'Omar Mohammed', specialization: 'Ophthalmologist', description: ''}
            // ],
            modalIsShowen: false,
            drDetails: {},
            doctors: [],
            idxDr: null,
        }
    },
    mounted() {
        axios.get('http://192.168.43.7:8000/api/doctors')
        .then(res => {
            this.doctors = res.data.data;
        })
    },
    methods: {
        openBookingModal(index) {
            this.modalIsShowen = true;
            this.drDetails = {
                ...this.doctors[index]
            }
            this.idxDr = this.doctors[index].id;
        },
        closeModal() {
            this.modalIsShowen = false;
        }
    }
}
</script>


<style scoped>
.doctors {
    padding: var(--section-padding) 0;
    background-color: var(--section-background);
}
.content {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}
</style>