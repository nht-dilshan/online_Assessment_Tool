<template>
  <div class="home-page">
    <h1>Welcome to the Online Assessment</h1>
    <p>Click below to start the assessment.</p>

    <!-- Start Button -->
    <button @click="startAssessment">Start</button>
  </div>
</template>

<script>
export default {
  methods: {
    startAssessment() {
      // Navigate to the user details page
      this.$router.push('/question-list');
    },
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border-radius: 8px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

button {
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
