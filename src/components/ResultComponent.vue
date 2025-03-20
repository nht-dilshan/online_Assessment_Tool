<template>
  <div class="result-component">
    <h2>Your Result</h2>
    <p>Your total score is: {{ totalScore }}</p>
    <p>Skills Score: {{ skillsScore }}%</p>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  props: ['totalScore'],  // Receive totalScore as a prop

  computed: {
    skillsScore() {
      // Skills score = (Total score / 50) * 100
      const maxScore = 50;  // Total possible score for the section
      return ((this.totalScore / maxScore) * 100).toFixed(2);  // Calculate and format the score
    }
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
