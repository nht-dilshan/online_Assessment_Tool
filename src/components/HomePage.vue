<template>
  <div class="home-page">
    <h1>Welcome to the Online Assessment</h1>
    <p>Click below to start the assessment.</p>
    <button @click="startAssessment">Start</button>
  </div>
</template>

<script>
export default {
  methods: {
    startAssessment() {
      // Navigate to the user details page
      this.$router.push('/question-list');
    }
  }
}
</script>

<style scoped>
.home-page {
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

button:hover {
  background-color: #45a049;
}
</style>
