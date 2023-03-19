<template>
    <div class="booking-form">
        <div class="details">
            <div>
                <h1>{{ name }}</h1>
                <p>{{ spz }}</p>
            </div>
        </div>
        <form @submit.prevent="bookAppoitment">
            <div class="control">
                <label for="name">Name</label>
                <input v-model="enteredName" type="text" name="name"/>
            </div>
            <div class="control">
                <label for="email">E-mail</label>
                <input v-model="enteredEmail" type="email" name="email"/>
            </div>
            <div class="control">
                <label for="phone">Phone</label>
                <input v-model="enteredPhone" type="tel" name="phone"/>
            </div>
            <div class="control">
                <label for="age">Age</label>
                <input v-model="enteredAge" type="number" name="age"/>
            </div>
            <div class="control">
                <label>Gender</label>
                <select v-model="enteredGender">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div class="control">
                <label>Booking Reason</label>
                <textarea v-model="enteredReason"></textarea>
            </div>
            <div class="control">
                <label>Date</label>
                <input v-model="enteredDate" type="date" name="date"/>
            </div>
            <div class="control">
                <label>Time</label>
                <input v-model="enteredTime" type="time" name="time" />
            </div>
            <div class="action">
                <button>Book</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['name', 'spz', 'img', 'id'],
    data() {
        return {
            enteredName: '',
            enteredEmail: '',
            enteredPhone: '',
            enteredAge: '',
            enteredGender: '',
            enteredReason: '',
            enteredTime: '',
            enteredDate: '',
        }
    },
    methods: {
        bookAppoitment() {
            const AppoitmentData = {
                name: this.enteredName,
                email: this.enteredEmail,
                phone: this.enteredPhone,
                age: this.enteredAge,
                gender: this.enteredGender,
                description: this.enteredReason,
                appoint_date: this.enteredDate,
                appoint_time: this.enteredTime,
                doctor_id: this.id 
            };
            console.log(AppoitmentData);
            axios.post('http://192.168.43.7:8000/api/appointments', AppoitmentData)
            .then(res => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped>
.details {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
}
img {
    width: 100px;
    border-radius: 50%;
}
h1 {
    margin-bottom: 10px;
}
p {
    color: #777;
}
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.control label {
    display: block;
    margin-bottom: 5px;
}
.control input,
.control textarea,
.control select {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    transition: 0.3s;
    background-color: #ccc;
    font-size: 18px;
}
.control input:focus,
.control textarea:focus {
    outline: none;
    border: 1px solid var(--primary);
}

textarea {
    width: 100%;
    height: 80px;
    resize: none;
}
.action {
    display:  flex;
    justify-content: space-between;
}

.action button {
    border-radius: 12px;
    padding: 10px 20px;
    background-color: var(--primary);
    border: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    transition: 0.3s;
}
.action button:hover {
    background-color: var(--primary-alt);
}
</style>