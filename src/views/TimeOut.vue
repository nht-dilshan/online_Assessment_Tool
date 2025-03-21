<template>
  <div class="timeout">
    <h2>Time's Up!</h2>
    <p>Your time has run out. You can now proceed to the result page.</p>

    <!-- Go Forward Button -->
    <button @click="goToResult">Go Forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToResult() {
      // Retrieve the skillsScore from Vuex or fallback if not found
      this.$store.getters.getSkillsScore || 0;

      // Redirect to the UserDetails page without URL params
      this.$router.push({ name: 'user-details' });
    },
  },
};
</script>

<style scoped>
.timeout {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border-radius: 8px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
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
