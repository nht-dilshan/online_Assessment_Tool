<template>
  <div class="user-details">
    <h2>Enter Your Personal Details</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="form.fullName" placeholder="Full Name" required />
      <input type="email" v-model="form.email" placeholder="Email Address" required />
      <input type="tel" v-model="form.phoneNumber" placeholder="Phone Number" required />
      <button type="submit">Go Forward</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phoneNumber: '',
      },
    }
  },
  methods: {
    submitForm() {
      // You can handle form submission logic here (e.g., save data to localStorage or send to the backend)
      console.log(this.form)

      // Optionally store user details (if needed later)
      localStorage.setItem('userDetails', JSON.stringify(this.form))

      // Navigate to the question list page after the form is submitted
      this.$router.push('/result')
    },
  },
}
</script>

<style scoped>
.user-details {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
