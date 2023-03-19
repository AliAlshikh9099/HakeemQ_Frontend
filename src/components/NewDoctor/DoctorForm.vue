<template>
    <div class="form">
        <h1>Let's make health together</h1>
        <form @submit.prevent="login" enctype="multipart/form-data">
            <div class="control">
                <label for="name">name</label>
                <input v-model="enteredName" type="text" name="name"/>
            </div>
            <div class="control">
                <label for="email">email</label>
                <input v-model="enteredEmail" type="email" name="email"/>
            </div>
            <div class="control">
                <label for="password">password</label>
                <input v-model="enteredPassword" type="password" name="password"/>
            </div>
            <div class="control">
                <label for="phone">phone</label>
                <input v-model="enteredPhone" type="tel" name="phone"/>
            </div>
            <div class="control">
                <label for="specialty">Specialty</label>
                <select @change="onSelectSpz" v-model="enteredSpz">
                    <option v-for="spz in spzs" :key="spz" :value="spz">{{ spz }}</option>
                </select>
            </div>
            <div class="action">
                <button>Register</button>
                <p>Already have an account?, <a href="#">login</a></p>
            </div>
        </form>
        <main-modal @close="closeModal" :isShown="isRegistered">
            <div class="lds-ring">  
                <div></div><div></div><div></div><div></div>
            </div>
            <h1>{{ regMsg }}</h1>
        </main-modal>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            enteredName: '',
            enteredEmail: '',
            enteredPassword: '',
            enteredPhone: '',
            enteredSpz: '',
            spzs: ['Dentist', 'Orthopedist', 'Pediatrician', 'Plastci', 'Urologist', 'Ophthalmologist'],
            regMsg: '',
            isRegistered: false,
        }
    },
    methods: {
        closeModal() {
            this.isRegistered = false;
        },
        onSelectSpz(event) {
            this.enteredSpz = event.target.value;
        },
        login() {
            const data = {
                name: this.enteredName,
                email: this.enteredEmail,
                password: this.enteredPassword,
                phone: this.enteredPhone,
                spz: this.enteredSpz,
            }
            try {
                axios.post('http://192.168.43.7:8000/api/register' , {
                    ...data,
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                } 
                )
                .then(res => {
                    console.log(res);
                    this.isRegistered = true;
                    this.regMsg = res.data.msg;
                })

            }
            catch(error) {
                console.log(error)
            } 
        }
    }
}
</script>

<style scoped>
.form {
    flex-basis: 50%;
}
@media (max-width: 620px) {
    .form {
        flex-basis: 100%;
    }
}
h1 {
    margin-bottom: 20px;
    color: var(--primary);
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
.control select {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    transition: 0.3s;
    background-color: #ccc;
    font-size: 18px;
}
.control input:focus {
    outline: none;
    border: 1px solid var(--primary);
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
.control select {
    width: 100%;
}
option {
    width: 100%;
}
.action button:hover {
    background-color: var(--primary-alt);
}
.action p a {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fdd;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fdd transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>