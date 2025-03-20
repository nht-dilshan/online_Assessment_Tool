<template>
  <div class="result-component">
    <h2>Your Result</h2>
    <p>You are a Beginner!</p>
    <p>Thank you, {{ userDetails.fullName }}! Your email is {{ userDetails.email }}.</p>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetails: JSON.parse(localStorage.getItem('userDetails')) || {}  // Retrieve user details from localStorage
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');  // Navigate back to the home page
    }
  }
};
</script>

<style scoped>
.result-component {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
